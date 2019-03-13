import { Component, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import axios from 'axios';

@Component({
	selector: 'timetable-search',
	templateUrl: './search.component.html'
})

export class SearchComponent {

	@Output() onSearchUpdate: EventEmitter<any> = new EventEmitter();

	didSelectFromAutocomplete = {};
	searchOriginRef;
	searchDestinationRef;
	CancelToken;
	autocompleteOrigin = '[{}]';
	autocompleteDestination = '[{}]';;
	origin;
	destination;

	constructor(private elementRef:ElementRef) {

		// bind methods
		this.handleBlur = this.handleBlur.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleSelection = this.handleSelection.bind(this);

		this.CancelToken = axios.CancelToken;

		const autocompleteDefaultSations = JSON.stringify([
			{
				label: 'Bern',
				id: 8507000
			},
			{
				label: 'Zürich HB',
				id: 8503000
			},
			{
				label: 'Fribourg',
				id: 178
			},
			{
				label: 'Basel',
				id: 22
			},
			{
				label: 'Genève',
				id: 8501008
			}
		]);

		this.autocompleteOrigin = autocompleteDefaultSations;
		this.autocompleteDestination = autocompleteDefaultSations;
	}

	ngAfterViewInit() {
		this.searchOriginRef = this.elementRef.nativeElement.querySelector('sbb-autocomplete[name="origin"]');
		this.searchDestinationRef = this.elementRef.nativeElement.querySelector('sbb-autocomplete[name="destination"]');

		this.searchOriginRef.addEventListener('sbb-autocomplete_blur', this.handleBlur);
		this.searchOriginRef.addEventListener('sbb-autocomplete_input', this.handleInput);
		this.searchOriginRef.addEventListener('sbb-autocomplete_selection', this.handleSelection);
		this.searchDestinationRef.addEventListener('sbb-autocomplete_blur', this.handleBlur);
		this.searchDestinationRef.addEventListener('sbb-autocomplete_input', this.handleInput);
		this.searchDestinationRef.addEventListener('sbb-autocomplete_selection', this.handleSelection);
	}

	handleBlur(evt) {
		const type = evt.target.name;

		if (this.didSelectFromAutocomplete[type]) {
			return;
		}

		if (type === 'origin') {
			evt.target.value = JSON.parse(this.autocompleteOrigin)[0].label;
		} else {
			evt.target.value = JSON.parse(this.autocompleteDestination)[0].label;
		}

	}

	handleInput(evt) {
		const type = evt.target.name;
		const value = evt.detail.input;
		const cancelTokenKey = `${type}CancelToken`;
		const cancelToken = this[cancelTokenKey];

		this.didSelectFromAutocomplete[type] = false;

		if (value.length < 1) {
			return;
		}

		cancelToken && cancelToken();

		axios
			.get(`https://global-warmer.com/sbb/station-search/${value}`, {
				cancelToken: new this.CancelToken((cancelToken) => {
					this[cancelTokenKey] = cancelToken;
				})
			})
			.then((res) => {
				const locations = res.data.locations;

				if (locations && locations.length > 0) {
					const suggestions = locations.map(location => ({
						label: location.name,
						id: location.uic
					}));

					if (type === 'origin') {
						this.autocompleteOrigin = JSON.stringify(suggestions);
						this.origin = suggestions[0];
					} else {
						this.autocompleteDestination = JSON.stringify(suggestions);
						this.destination = suggestions[0];
					}

					this.validateSearch();
				}
			}).catch((err) => {
				console.log('Error requesting Stations: ', err);
			});
	}

	handleSelection(evt) {
		const type = evt.target.name;
		const selection = evt.detail.selection;

		this.didSelectFromAutocomplete[type] = true;

		if (type === 'origin') {
			this.origin = selection;
		} else {
			this.destination = selection;
		}

		this.validateSearch();
	}

	validateSearch() {
		if (!this.origin || !this.destination) {
			return;
		}

		if (!this.origin.id || !this.destination.id) {
			return;
		}

		this.onSearchUpdate.emit([this.origin, this.destination]);
	}

}

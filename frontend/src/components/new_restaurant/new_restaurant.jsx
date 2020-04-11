import React, { Component } from "react";
import axios from "axios";

export default class newRestaurantForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			priceRange: null,
			location_long: null,
			location_lat: null,
			phoneNumber: "",
			streetAddress: "",
			cityAddress: "",
			webLink: "",
			photoURL: null,
			photoFile: null,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.currentTarget.value });
	}

	handleFile(photoFile, photoURL) {
		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();
		fileReader.onloadend = () => {
			this.setState({ [photoFile]: file, [photoURL]: fileReader.result });
		};
		if (file) {
			fileReader.readAsDataURL(file);
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", this.state.name);
		formData.append("priceRange", this.state.priceRange);

		formData.append("location_long", this.state.location_long)
		formData.append("location_lat", this.state.location_lat)

		formData.append("phoneNumber", this.state.phoneNumber);
		formData.append("streetAddress", this.state.streetAddress);
		formData.append("cityAddress", this.state.cityAddress);
		formData.append("webLink", this.state.webLink);

		if (this.state.photoFile) {
			formData.append("photo", this.state.photoFile);
		}

		axios.post("/api/restaurants/new", formData).then(
			(response) => console.log(response),
			(response) => {
				console.log(response);
			}
		);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Restaurant Information</h1>
					<p>
						<input
							type="text"
							onChange={this.handleInput("name")}
							value={this.state.name}
							placeholder={"Name"}
						/>
					</p>
					<p>
						<input
							type="text"
							onChange={this.handleInput("priceRange")}
							value={this.state.priceRange}
							placeholder={"priceRange"}
						/>
					</p>
					<p>
						<input
							type="text"
							onChange={this.handleInput("location_long")}
							value={this.state.location_long}
							placeholder={"Longitude"}
						/>
					</p>
					<p>
						<input
							type="text"
							onChange={this.handleInput("location_lat")}
							value={this.state.location_lat}
							placeholder={"Latitude"}
						/>
					</p>
					<input
						type="text"
						onChange={this.handleInput("phoneNumber")}
						value={this.state.phoneNumber}
						placeholder={"phoneNumber"}
					/>
					<p>
						<input
							type="text"
							onChange={this.handleInput("streetAddress")}
							value={this.state.streetAddress}
							placeholder={"streetAddress"}
						/>
					</p>
					<p>
						<input
							type="text"
							onChange={this.handleInput("cityAddress")}
							value={this.state.cityAddress}
							placeholder={"cityAddress"}
						/>
					</p>
					<p>
						<input
							type="text"
							onChange={this.handleInput("webLink")}
							value={this.state.webLink}
							placeholder={"webLink"}
						/>
					</p>

					<p>
						<input
							type="file"
							onChange={this.handleFile.bind(this)}
						/>
					</p>
					<h2>Food 1</h2>

					<button>Create!</button>
				</form>
			</div>
		);
	}
}

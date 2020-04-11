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

			foodDescription1: "",
			foodDescription2: "",
			foodDescription3: "",

			foodPrice1: "",
			foodPrice2: "",
			foodPrice3: "",

			foodFile1: null,
			foodFile2: null,
			foodFile3: null,

			foodFileURL1: "",
			foodFileURL2: "",
			foodFileURL3: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFile = this.handleFile.bind(this);
	}

	handleInput(field) {
		return (e) => this.setState({ [field]: e.currentTarget.value });
	}

	handleFile(event, photoFile, photoURL) {
		const file = event.currentTarget.files[0];
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
		formData.append("name", "TEST2"); //this.state.name);
		formData.append("priceRange", 1); //this.state.priceRange);

		formData.append("location_long", -122.410594); //this.state.location_long);
		formData.append("location_lat", 37.787098); //this.state.location_lat);

		// formData.append("phoneNumber", this.state.phoneNumber);
		// formData.append("streetAddress", this.state.streetAddress);
		// formData.append("cityAddress", this.state.cityAddress);
		// formData.append("webLink", this.state.webLink);

		formData.append("foodDescription1", this.state.foodDescription1);
		formData.append("foodDescription2", this.state.foodDescription2);

		formData.append("foodPrice1", this.state.foodPrice1);
		formData.append("foodPrice2", this.state.foodPrice2);
		
		if (this.state.photoFile) {
			formData.append("photo", this.state.photoFile);
		}
		if (this.state.foodFile1) {
			formData.append("photo", this.state.foodFile1);
		}
		if (this.state.foodFile2) {
			formData.append("photo", this.state.foodFile2);
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
							onChange={(event) =>
								this.handleFile(event, "photoFile", "photoURL")
							}
						/>
					</p>

					<h2>Food 1</h2>
					<p>
						<p>
							<input
								type="text"
								onChange={this.handleInput("foodDescription1")}
								value={this.state.foodDescription1}
								placeholder={"food name 1"}
							/>
						</p>

						<p>
							<input
								type="text"
								onChange={this.handleInput("foodPrice1")}
								value={this.state.foodPrice1}
								placeholder={"foodPrice1"}
							/>
						</p>

						<input
							type="file"
							onChange={(event) =>
								this.handleFile(
									event,
									"foodFile1",
									"foodFileURL1"
								)
							}
						/>
					</p>

					<h2>Food 2</h2>
					<p>
						<p>
							<input
								type="text"
								onChange={this.handleInput("foodDescription2")}
								value={this.state.foodDescription2}
								placeholder={"food name 2"}
							/>
						</p>

						<p>
							<input
								type="text"
								onChange={this.handleInput("foodPrice2")}
								value={this.state.foodPrice2}
								placeholder={"foodPrice2"}
							/>
						</p>

						<input
							type="file"
							onChange={(event) =>
								this.handleFile(
									event,
									"foodFile2",
									"foodFileURL2"
								)
							}
						/>
					</p>

					<h2>Food 3</h2>
					<p>
						<p>
							<input
								type="text"
								onChange={this.handleInput("foodDescription3")}
								value={this.state.foodDescription3}
								placeholder={"food name 3"}
							/>
						</p>

						<p>
							<input
								type="text"
								onChange={this.handleInput("foodPrice3")}
								value={this.state.foodPrice3}
								placeholder={"foodPrice3"}
							/>
						</p>

						<input
							type="file"
							onChange={(event) =>
								this.handleFile(
									event,
									"foodFile3",
									"foodFileURL3"
								)
							}
						/>
					</p>

					<button>Create!</button>
				</form>
			</div>
		);
	}
}

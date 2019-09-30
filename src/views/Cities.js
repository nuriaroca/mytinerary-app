import React from 'react';

const CityImage = props => <img src={props.city.img} alt={props.city.name} width="50px" />;
const CityName = props => <p>{props.city.name}</p>;

const City = props => {
    return (
        <div className="city">
            <CityImage city={props.city} />
            <div className="name">
                <CityName city={props.city} />
            </div>
        </div>
    )
};

// const CitiesList = props => {
//     const citiesList = props.list.map((city, i) => <City city={city} key={i} />);
//     return (
//         <div className="city-list">
//             {citiesList}
//         </div>
//     )
// }


class Cities extends React.Component {

    constructor() {
        super();
        this.state = {
            cities: [],
        }
    };


    componentDidMount() {

        fetch('https://ubiqum-mern-api.herokuapp.com/api/cities/')
            .then(results => {
                return results.json();
            }).then(data => {
                //this.setState({ cities: data });
                let cities = data.map((city, index) => {
                    return (
                        <City city={city} key={index} />
                    )
                })
                this.setState({ cities: cities });
                console.log("state", this.state.cities);
            })

    }

    render() {
        // return (<CitiesList list={this.state.cities} />);
        return (<div>
            {this.state.cities}
        </div>)
    }

}

export default Cities;
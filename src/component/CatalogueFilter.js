import React from 'react';

const Checkbox = props => (
            <li>
                <input onClick={ (e) => props.handleClick(e, props.category) } id={props.category} name="category" type="checkbox"/>
                <label htmlFor={props.category}> {props.category} </label>
            </li>
);

const Filter = props => (
    <ul id="catalogue-filter">
        <Checkbox category="sport" handleClick={ props.handleClick }/ >
        <Checkbox category="music" handleClick={ props.handleClick }/ >
        <Checkbox category="food" handleClick={ props.handleClick }/ >
        <Checkbox category="school" handleClick={ props.handleClick }/ >
        <Checkbox category="car" handleClick={ props.handleClick }/ >
    </ul>
);

export default Filter;
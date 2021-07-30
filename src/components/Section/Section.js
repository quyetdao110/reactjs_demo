import React, { Component } from 'react'

export default class Section extends Component {
    render() {
        return ( <
            div id = "section" >
            <
            div className = "container-fluid" >
            <
            div className = "row heading-section" >
            <
            div className = "col-4" / >
            <
            div className = "col-4" >
            <
            h1 > Manage It All with Wix Photography < /h1> < /
            div > <
            div className = "col-4" / >
            <
            /div> <
            div className = "row row-cols-2" >
            <
            div className = "col-6 content-section" >
            <
            h2 > Highlight Your Best Work with a Photography Portfolio < /h2> <
            p > Impress clients with a high - res portfolio.Brand your work with watermarks, make them downloadable, shareable
            for social media and more. < /p> <
            a className = "section-link"
            href = "#" > Get Started <
            i className = "fas fa-arrow-right righ-arrow" > < /i></a >
            <
            /div> <
            div className = "col-6" > < img className = "section-image"
            src = "./images/section1.jpg"
            alt = "section 1" / > < /div> <
            div className = "col-6" > < img className = "section-image"
            src = "./images/section2.jpg"
            alt = "section 2" / > < /div> <
            div className = "col-6 content-section" >
            <
            h2 > Offer Clients Digital Photo Albums Catered to Their Needs < /h2> <
            p > Give a tailor - made experience with custom digital photo albums.Ensure privacy with password - protected websites
            for each client. < /p> <
            a className = "section-link"
            href = "#" > Get Started <
            i className = "fas fa-arrow-right righ-arrow" / > < /a> < /
            div > <
            div className = "col-6 content-section" >
            <
            h2 > Expand Your Business by Selling Photos Online < /h2> <
            p > Open a new revenue stream by selling digital and physical prints in the Art Store.Stay in control of your work with digital licensing and right - click protection. < /p> <
            a className = "section-link"
            href = "#" > Get Started <
            i className = "fas fa-arrow-right righ-arrow" > < /i></a >
            <
            /div> <
            div className = "col-6" > < img className = "section-image"
            src = "./images/section3.jpg"
            alt = "section 3" / > < /div> < /
            div > <
            div className = "row" >
            <
            div className = "col text-center" > < a className = "btn btn-dark"
            href = "#"
            role = "button" > Get Started < /a></div >
            <
            /div> < /
            div > <
            hr className = "solid" / >
            <
            /div>

        );
    }
}
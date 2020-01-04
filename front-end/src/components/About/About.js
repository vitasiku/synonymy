import React from 'react';
import classes from './About.module.css';
import { connect } from 'react-redux';

function About(props) {
    return <div className={classes.About}
    style={{
        color: props.pallete.userInputText
    }}>
        <div className={classes.AboutBox}
        style={{
            borderColor: props.pallete.userInputText
        }}>
            <h1 className={classes.MainHeader}>What is Synonymy?</h1>
            <h3 className={classes.SecondayHeader}>Simple: I help reduce repitition in your essays.</h3>
            <p className={classes.MainParagraph}>
                I read your essay and find recurring words, 
                compare how often it has been used to it's estimated occurance in day-to-day language, 
                rank order them based severity and offer synonyms.
            </p>
            <h1 className={classes.MainHeader}>How does it work?</h1>
            <p>
                After gathering a list of words used more than twice in your essay, 
                I look for the word in a list of 97,565 unique words used in over 743 billion different places ranked from most to least used
                collected by <a target="_blank" href="http://norvig.com/mayzner.html" style={{color: props.pallete.userInputText}}>Peter Norvig</a> from data provided by Google Books.
            </p>
            <p>
                Much like the mass of stars and populations of cities, the use of words follow a pareto distribution. 
                In fact, I use the word's ranking in this list to come up with an estimate of the expected ratio of use.
                I then compare the actual ratio to the expected ratio to come up with a sort of "ratio of ratios" which I call the word's score.
                This score is used as a general benchmark for how overused I perceive a word to be.
                Finally, I take the most overused words and gather all the possible synonyms I can find and offer them.
            </p>
            
        </div>
    </div>
}

const mapStateToProps = state => {
    return {
        pallete: state.pallete.pallete
    }
}

export default connect(mapStateToProps)(About);


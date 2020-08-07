import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import database from '../../firebase';

function TinderCards() {
    const [people, setPeople] = useState([])
    
    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => {
                setPeople(snapshot.docs.map(doc => doc.data()))
            })

            //리스너 과부하 방지
            return () => {
                unsubscribe();
            }
    }, []);

    return (
        <div className="card__container">
            {people.map(person => (
                <TinderCard className="swipe" key={person.name}>
                    <div style={{backgroundImage: `url(${person.url})`}}
                        className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards;
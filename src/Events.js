import React from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { useState, useEffect } from "react";

function Events(){
  const [events, setEvents] = useState([]);

  React.useEffect(() => {
    axios.get('https://api.nasa.gov/DONKI/CME?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=diO51zeLGvrk6PIn1wIqHeW94DZR9uRB1Z2agnh6')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Note</th>
          <th>Start Time</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{event.note}</td>
            <td>{event.startTime}</td>
            <td><a href={event.link}>{event.link}</a></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Events;
import React from 'react';

const Ticket = () => {
    return (
        <div className='ticket'>
            <canvas id='circle'>
                <h1>Hi</h1>
            </canvas>
            <div className='ticket-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages</div>
            <div className='ticket-state'>To Do</div>
        </div>
    );
};

export default Ticket;

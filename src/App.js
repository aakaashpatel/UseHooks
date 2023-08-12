import React from 'react';
import Header from './components/Header/header';
import Event from './components/Event/event';
const App = () => {
  let subscriptions=[
    {
 
      id:"1",
      date:(new Date('2023', '03', '31')),
      title:'Montly Subscriptions',
      amount:'125.60'      
  },
    {
 
      id:"2",
      date:(new Date('2022', '03', '39')),
      title:'Anually Subscriptions',
      amount:'1250.60'      
  },
    {
 
      id:"3",
      date:(new Date('2021', '03', '28')),
      title:'Quaterly Subscriptions',
      amount:'490.60'      
  },
]
  return (
    <>
    {/* <Header name='Aakash' last='Patel'/>
    <p>He is just a normal BOY</p>
    <Header name='Venom'/>
    <p>He is killing person</p>
     */}
     <Event passedDate={subscriptions[0].date.toDateString()} passedTitle={subscriptions[0].title} passedAmount={subscriptions[0].amount}/>
     <Event passedDate={subscriptions[1].date.toDateString()} passedTitle={subscriptions[1].title} passedAmount={subscriptions[1].amount}/>
     <Event passedDate={subscriptions[2].date.toDateString()} passedTitle={subscriptions[2].title} passedAmount={subscriptions[2].amount}/>
    </>
  )
}

export default App
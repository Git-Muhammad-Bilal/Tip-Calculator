import React, { Component } from 'react'

import ServiceSelect from './ServiceSelect'
import BillInput from './Billinput';
import NumberOfPeople from './NumberOfPeople'
import './TipCal.css';

export default class TipCalcultorApp extends Component {
  state = {
    bill: '',
    tipParcentage: '',
    numberOfPeople: '',
    tipis: '',
    ServiceOption: ["--Choose an Option--", '30% - outstanding', '20% -Good', '15% -It was OK', '10% - it was Bad', '5% -Terrible']
  }
  passBill = (bill) => {
    this.setState({ bill: bill })
  }
  passNumberOfPeople = (numberOfPeople) => {
    this.setState({ numberOfPeople: numberOfPeople })
  }
  setTipPercentage = (percentage) => {

    this.setState({ tipParcentage: percentage })

  }


  CalculateTip = () => {

    let totalTip = this.state.bill / 100 * this.state.tipParcentage / this.state.numberOfPeople
    this.setState({ tipis: totalTip.toFixed(2) })
  }

  

render() {
    return (
      <div className="tipCal-App">
        <div className="content-container">
          <div className="tip-header">
            <h1>TIP CALCULATOR</h1>
          </div>

          <div className="section-bill">
            <p className="heading">How much was your bill?</p>
            <div>
             <strong>$</strong>
            <BillInput bill={this.state.bill} passBill={(bill) => this.passBill(bill)} />
            </div>
          </div>


          <div className="section-percentage">
            <p className="heading">How much was your bill?</ p>
            <ServiceSelect ServiceOption={this.state.ServiceOption} setTipPercentage={(percentage) => this.setTipPercentage(percentage)} />
          </div>

          <div className="section-sharingthebill">
            <p className="heading">How many people are sharing the bill?</p>
            <div>
              <strong>People</strong>
            <NumberOfPeople numberOfPeople={this.state.numberOfPeople} passNumberOfPeople={(numberOfPeople) => this.passNumberOfPeople(numberOfPeople)} />
            </div>

          </div>


          <div className="calculation">
            <button
              className='calculate-button'
              onClick={this.CalculateTip}
            >CALCULATE</button>
            {
              this.state.tipis ?
                <div className="total-text">
                  <h2>TIP AMOUNT</h2>
                  <h1 style={{ marginLeft: "30px" }}>{`${'$'}${this.state.tipis}`}</h1>
                  <h4 style={{ marginLeft: "60px" }}>each</h4>
                </div> : ''
            }

          </div>
        </div>


      </div>
    )
  }
}

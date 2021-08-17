import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ResetarContainer = styled.div`
  border-radius: 3px;
  width: 400px;
  height: 600px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
    margin-right: auto;
`


function ResetButton() {
  const onClickReset = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yara/clear').then(response => {
      console.log(response)
    })
  }
  return (
    <div>
        <ResetarContainer>
        <button onClick={onClickReset}>Resetar curtidas e matches</button>
        </ResetarContainer>
      </div>
      )
}

      export default ResetButton
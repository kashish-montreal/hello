import React from 'react'

export default function TableCard() {
  return (
    <div>
      <table style={{border: "1px solid black"}}>
        <tr >
            <th style={{border: "1px solid black"}}>NAME</th>
            <th style={{border: "1px solid black"}}>SIRNAME</th>
            <th style={{border: "1px solid black"}}>GENDER</th>
        </tr>
        <tr>
        <td>Kashish</td>
        <td>Sharma</td>
        <td>Male</td></tr>
        <tr>
        <td>Kashish</td>
        <td>Sharma</td>
        <td>Male</td></tr>
        <tr>
        <td>Kashish</td>
        <td>Sharma</td>
        <td>Male</td></tr>
      </table>
    </div>
  )
}

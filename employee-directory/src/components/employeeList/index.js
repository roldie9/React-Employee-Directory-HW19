import React, { useState } from "react";
import employeeCard from "../employeeCard"
import employees from "../../employees.json"
import ".style.css";

function employeeList() {
    const [employeeArr, setEmployeeArr] = useState(employees);

    // filters employees by category
    const filterEmployees = (value, search) => {
        const filteredArr = [];
        for (let i = 0; i < employees.length; i++) {
            if (search === "First Name") {
                if (employees[i].name.first.toLowerCase().startsWith(value.toLowerCase())) {
                    filteredArr.push(employees[i]);
                }
            } else if (search === "Email") {
                if (employees[i].email.toLowerCase().startsWith(value.toLowerCase())) {
                    filteredArr.push(employees[i]);
                }
            } else if (search === "Country") {
                if (employees[i].location.country.toLowerCase().startsWith(value.toLowerCase())) {
                    filteredArr.push(employees[i]);
                }
            } else if (search === "State") {
                if (employees[i].location.state.toLowerCase().startsWith(value.toLowerCase())) {
                    filteredArr.push(employees[i]);
                }
            } else {
                if (employees[i].name.last.toLowerCase().startsWith(value.toLowerCase())) {
                    filteredArr.push(employees[i]);
                }
            }
        }
        return filteredArr;
    }

    // sorts employees in alphabetical order depending on selected category
    function sortEmployees (value) {
        
        let sortArr = employeeArr.slice();
        if (value === "First Name") {
            sortArr.sort((a,b) => (a.name.first > b.name.last) ? 1 : -1)
        } else if (value === "Last Name") {
            sortArr.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1);
        } else if (value === "Email") {
            sortArr.sort((a,b) => (a.email > b.email) ? 1 : -1);
        } else if (value === "Country") {
            sortArr.sort((a,b) => (a.location.country > b.location.country) ? 1 : -1);
        } else if (value === "State") {
            sortArr.sort((a,b) => (a.location.state > b.location.state) ? 1 : -1);
        }
        return sortArr;
    }

    return (
        <div>
            <div id="searchTopper">
                <form>
                    <label> Search by:
                        <select id="searchBox">
                            <option>First Name</option>
                            <option>Last Name</option>
                            <option>Email</option>
                            <option>Country</option>
                            <option>State</option>
                        </select>
                    </label>
                    <div id="searchKeys">
                        <p>Enter search keywords here:</p>
                        <input type="text"
                        onChange={e => setEmployeeArr(filterEmployees(e.target.value, document.getElementById("searchBox").value))}/>
                    </div>
                </form>
            </div>
        
        <table id="empTable">
            <thead>
                <tr>
                    <th className="tableDir"></th>
                    <th className="tableDir" onClick={e => (setEmployeeArr(e.currentTarget.textContent))}>First Name</th>
                    <th className="tableDir" onClick={e => (setEmployeeArr(e.currentTarget.textContent))}>Last Name</th>
                    <th className="tableDir" onClick={e => (setEmployeeArr(e.currentTarget.textContent))}>Email</th>
                    <th className="tableDir" onClick={e => (setEmployeeArr(e.currentTarget.textContent))}>Country</th>
                    <th className="tableDir" onClick={e => (setEmployeeArr(e.currentTarget.textContent))}>State</th>
                </tr>
            </thead>
            <tbody>
                {employeeArr.map(employee => (
                    <employeeCard picture={employee.picture.large}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        email={employee.email}
                        country={employee.location.country}
                        state={employee.location.state}
                        key={employee.name.last + employee.name.first}/>
                ))}
            </tbody>
        </table>
        </div>
    );
    
}

export default employeeList;
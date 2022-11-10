import React, { Component, useEffect, useState } from 'react';
import './Input.css'
import NavBar from './NavBar';
import { DataStore } from '@aws-amplify/datastore';
import { Ingabo } from './models';

function Form() {
    
    const [formData, setFormData] = useState(
        {
            activity1: false,
            activity2: false,
            activity3: false,
            activity4: false,
            activity5: false,
            activity6: false,
            activity7: false,
            activity8: false,
        }
    )


    function handleChange(event) {

        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    

    const createIngabo = async () => {
        await DataStore.save(

            new Ingabo({
                "fullName": document.getElementById('fullName').value,
                "dateofbirth": document.getElementById('dateofbirth').value,
                "nationalID": document.getElementById('nationalID').value,
                "gender": document.getElementById('gender').value,
                "addressCell": document.getElementById('addressCell').value,
                "addressSector": document.getElementById('addressSector').value,
                "addressDistrict": document.getElementById('addressDistrict').value,
                "cooperative": document.getElementById('cooperative').value,
                "telephone": document.getElementById('telephone').value,
                "activity1": document.getElementById('activity1').checked,
                "activity2": document.getElementById('activity2').checked,
                "activity3": document.getElementById('activity3').checked,
                "activity4": document.getElementById('activity4').checked,
                "activity5": document.getElementById('activity5').checked,
                "activity6": document.getElementById('activity6').checked,
                "activity7": document.getElementById('activity7').checked,
                "activity8": document.getElementById('activity8').checked,
            })

        )

    }

    return (
        <>
            <div className="dataEntryForm">
                <form onSubmit={createIngabo}>

                <h2 className="inputGroupTitle" >INDENTIFICATION</h2>
                    <div className="idSection">
                        <label htmlFor="" className="flex-label">
                            <h3 className="fieldLableName">Full Name</h3>
                            <input type="text" className="inputField" id="fullName" placeholder="Last name  First name" />
                        </label>
                        <label htmlFor="" className="flex-label">
                            <h3 className="fieldLableName">Date of Birth</h3>
                            <input type="date" data-date-format='yy-mm-dd' className="inputField" id="dateofbirth" placeholder="YYYY-MM-DD" />
                        </label>
                        <label htmlFor="" className="flex-label">
                            <h3 className="fieldLableName" id="gender">Gender</h3>
                            <select>
                                <option>M</option>
                                <option>F</option>
                            </select>
                        </label>
                        <label htmlFor="" className="flex-label">
                            <h3 className="fieldLableName">National ID</h3>
                            <input type="tel" className="inputField" id="nationalID" placeholder="- ---- - - ---- - ----" />
                        </label>
                        <label htmlFor="" className="flex-label">
                            <h3 className="fieldLableName">Telephone</h3>
                            <input type="tel" className="inputField" id="telephone" placeholder="+123 --- --- ---" />
                        </label>
                        <label htmlFor="" className="flex-label">
                            <h3 className="fieldLableName">Cooperative</h3>
                            <input type="text" onChange={handleChange} className="inputField" id="cooperative" checked={formData.activity1} placeholder="Ingabo Syndicate" />
                        </label>
                    </div>
                    <div>
                        <div className="addressSection">
                            <h2 className="inputGroupTitle">ADDRESS</h2>
                            <div className="address-fields">
                                <label htmlFor="">
                                    <input type="text" className="inputField halfwayInput" id="addressDistrict" placeholder="Enter district" />
                                </label>
                                <label htmlFor="">
                                    <input type="text" className="inputField halfwayInput" id="addressSector" placeholder="Enter sector" />
                                </label>
                                <label htmlFor="">
                                    <input type="text" className="inputField halfwayInput" id="addressCell" placeholder="Enter cell" />
                                </label>
                            
                            </div>
                        </div>

                        <div className="propertiesSection">
                            <h2 className="inputGroupTitle">PROPERTIES</h2>
                            <div className="address-fields">
                                <label htmlFor="activity1" className="checkbox-label">
                                    <span className="checkbox-title">Imyumbati</span>
                                    <input type="checkbox" onChange = {handleChange} name="activity1" className="checkbox" id="activity1" />
                                </label>
                                <label htmlFor="activity2" className="checkbox-label">
                                    <span className="checkbox-title">Umuceri</span>
                                    <input type="checkbox" onChange = {handleChange} className="checkbox" name="activity2" id="activity2" />
                                </label>
                                <label htmlFor="activity3" className="checkbox-label">
                                    <span className="checkbox-title">Imboga n'Imbuto'</span>
                                    <input type="checkbox" onChange = {handleChange} className="checkbox" name="activity3" id="activity3" />
                                </label>
                                <label htmlFor="activity4" className="checkbox-label">
                                    <span className="checkbox-title">Inkoko</span>
                                    <input type="checkbox" onChange = {handleChange} className="checkbox" name="activity5" id="activity4" />
                                </label>
                                <label htmlFor="activity5" className="checkbox-label">
                                    <span className="checkbox-title">Inka</span>
                                    <input type="checkbox" onChange = {handleChange} className="checkbox" name="activity6" id="activity5" />
                                </label>
                            
                            </div>
                        </div>
                    </div>
                    <div className="action-btns">
                        <button type="submit" className="cta-btns save-btn">Save</button>
                        <button type="reset" className="cta-btns reset-btn">Reset</button>
                    </div>

                </form>
                    

                </div>
            </>
    )



}

export default Form;
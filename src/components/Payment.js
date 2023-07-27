
import React from "react";
import { AiFillLock } from "react-icons/ai"


function Payment({ setIsLoggedIn }) {

    const payHandler = () => {
        alert("Course Purchased Successfully")
    }



    return (
        <div>
            <div className="bg-blue-300 min-w-screen min-h-screen text-white flex items-center justify-center  px-5 pb-10 pt-16">
                <div className=" bg-white w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
                    <div classname="w-full pt-1 pb-5">
                        <div classname="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                            <i classname="mdi mdi-credit-card-outline text-3xl"></i>
                        </div>
                    </div>
                    <div className="mb-10">
                        <h1 className=" text-center font-bold text-xl uppercase">Secure payment info</h1>
                    </div>

                    <div className="mb-3  -mx-2 flex item-center justify-center">
                        <div className="px-2 ">
                            <label for='type1' className="flex items-center cursor-pointer" >
                                <input type="radio" classname="" name="type" id="type1" checked></input>
                                <img className="h-8 ml-3" src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" />

                            </label>

                        </div>
                        <div className="px-2">
                            <label for='type1' className="flex items-center cursor-pointer" >
                                <input type="radio" classname="" name="type" id="type1" ></input>
                                <img className="h-8 ml-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" />

                            </label>

                        </div>

                    </div>
                    <form>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="Name On Card" >
                                Name On Card
                            </label>
                            <input required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="Name On Card" id="Name On Card" type="text" placeholder="Souvik Nandi" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="Card Number" >
                                Card Number
                            </label>
                            <input required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Card Number" type="text" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div class="mb-3 -mx-2 flex items-end">
                            <div class="px-2 w-1/2">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="Card Number">
                                    Expiration Date
                                </label>
                                <div>
                                    <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                        <option value="01">01 - January</option>
                                        <option value="02">02 - February</option>
                                        <option value="03">03 - March</option>
                                        <option value="04">04 - April</option>
                                        <option value="05">05 - May</option>
                                        <option value="06">06 - June</option>
                                        <option value="07">07 - July</option>
                                        <option value="08">08 - August</option>
                                        <option value="09">09 - September</option>
                                        <option value="10">10 - October</option>
                                        <option value="11">11 - November</option>
                                        <option value="12">12 - December</option>
                                    </select>
                                </div>
                            </div>
                            <div class="px-2 w-1/2">
                                <select class="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" >
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-10">
                            <label class=" text-sm mb-2 ml-1 font-bold">Security Code</label>
                            <div>
                                <input required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="000" type="text" />
                            </div>
                        </div>
                        <div className="">
                            <button type="submit" class=" justify-center item-center gap-6 flex mt-5 block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold " onClick={payHandler}>
                                PAY NOW <AiFillLock className="mt-1" /> </button>

                        </div>
                    </form>






                </div>




            </div>







        </div>


    );

}

export default Payment;

import { paginator } from "./paginator.js"
import { encode } from "../utils.js"
const SIZE = 4   //Page Size
const SERVER_URL = "http://localhost:8080/"
const TOTAL = Math.ceil(await fetch(`${SERVER_URL}api/cars/total`).then(res => res.text())/SIZE)
const ENDPOINT = `${SERVER_URL}api/cars/pageable`

export async function load(curPage) {

    console.log(TOTAL)
    const cars = await fetch(`${ENDPOINT}?size=${SIZE}&page=${curPage - 1}`)
        .then(res => res.json())

    document.getElementById("car_data").innerHTML = JSON.stringify(cars)

    function makeTable(cars) {
        const myTable = document.getElementById("car_data_table")
        const tableData = cars.map(function(car) {
            return "<td>" + encode(car.id) + "</td>" +
            "<td>" + encode(car.brand) + "</td>" +
            "<td>" + encode(car.model) + "</td>" +
            "<td>" + encode(car.pricePrDay) + "</td>"})
        tableData.forEach(car=> console.log(car))
        myTable.innerHTML = tableData.map(car => `<tr>${(car)}</tr>`).join("")
    }
    makeTable(cars)

    //REDRAW PAGINATION
    paginator({
        target: document.getElementById("pagination_control"),
        total: TOTAL,
        current: curPage,
        click: load
    })
}

const populate =async (value, Currency) => {
    let myStr=""
    url =  "https://api.currencyapi.com/v3/latest?apikey=cur_live_pIfmdWxuQxIZDx5xy1zmlEzQ8KYxfS88oLgtB9Wr&base_currency=" +
    Currency;

    let response=await fetch(url)
    let rJson=await response.json()
    document.querySelector(".output").style.display="block";

    for (let key of Object.keys(rJson["data"])){

    myStr +=`
              <tr>
                 <td>${key}</td>
                 <td>${rJson["data"][key]["code"]}</td>
                 <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
              </tr>
              `

    };
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = myStr;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const Currency = document.querySelector("select[name='Currency']").value;
  populate(value, Currency);
});

async function storeSearchterm(term) {

    try {
        let res = await fetch(term);

        let data = await res.json();

        // console.log("data:", data);
        return data;

    } catch (err) {
        console.log("err:", err);
    }

}

export  {storeSearchterm};
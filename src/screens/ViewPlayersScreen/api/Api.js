import {API_URL} from "../../../utils/BaseUrl";

export const CallApi = {
    player_list,
    save_update_player_select,
    player_select_list,
    update_player_select
};

function update_player_select(data) {
    // console.log("DATA IS : ", data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        // body: data
    };

    // console.log("data option :",requestOptions)
    return fetch(`${API_URL}/update_player_select`, requestOptions)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

function save_update_player_select(data) {
    // console.log("DATA IS : ", data);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        // body: data
    };

    // console.log("data option :",requestOptions)
    return fetch(`${API_URL}/save_player_select`, requestOptions)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

function player_select_list(user_id) {
    return fetch(`${API_URL}/player_select/${user_id}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

function player_list(country_id) {
    return fetch(`${API_URL}/player_list_by_id/${country_id}`)
        .then(response => response.json())
        .then(result => {
            return result;
        });
}

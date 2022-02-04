let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let workpackage = new TempApi.Workpackage();document.getElementById('ijqtj').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('i4xhl').onclick = (event) => {
    event.preventDefault();
    workpackage['wpName'] = document.querySelector("[annotationname = 'wpName']").value;workpackage['wpDesc'] = document.querySelector("[annotationname = 'wpDesc']").value;apiWorkpackageApi.createworkpackage( workpackage, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};document.getElementById('iyg4l').onclick = (event) => {
    event.preventDefault();
    let workpackageId = window.location.pathname.replace('/workpackage/','');apiWorkpackageApi.deleteworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {};
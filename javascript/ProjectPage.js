let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let project = new TempApi.Project();document.getElementById('ijqtj').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('i4xhl').onclick = (event) => {
    event.preventDefault();
    project['projectName'] = document.querySelector("[annotationname = 'projectName']").value;project['projectDesc'] = document.querySelector("[annotationname = 'projectDesc']").value;apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); { location.href= '/UpdateProject/'+response.body.query._id+'';}}});};window.onload = () => {};
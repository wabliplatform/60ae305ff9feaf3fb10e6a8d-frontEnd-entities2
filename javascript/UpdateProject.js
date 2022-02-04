let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiWorkpackageApi = new TempApi.WorkpackageApi();document.getElementById('ijqtj').onclick = (event) => {
    event.preventDefault();
    { location.href= '/home';}};document.getElementById('i4xhl').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/UpdateProject/','');let project = new TempApi.Project();project['projectName'] = document.querySelector("[annotationname = 'projectName']").value;project['projectDesc'] = document.querySelector("[annotationname = 'projectDesc']").value;project['projectWP'] = document.querySelector("[annotationname = 'projectWP']").value; let opts = {project};apiProjectApi.updateproject( projectId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').value = response.body.query.projectName ;document.querySelector('[annotationname = projectDesc]').value = response.body.query.projectDesc ;document.querySelector('[annotationname = projectWP]').value = response.body.query.projectWP ;}});};document.getElementById('izydt').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/UpdateProject/','');apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {let projectId = window.location.pathname.replace('/UpdateProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = projectName]').value = response.body.query.projectName ;document.querySelector('[annotationname = projectDesc]').value = response.body.query.projectDesc ;}});apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("ikxo1").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wpName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].wpName;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'wpName'){
        subDataElements[i].textContent = data[data.length -i -1].wpName;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
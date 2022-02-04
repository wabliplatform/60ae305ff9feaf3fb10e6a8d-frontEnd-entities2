let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiWorkpackageApi = new TempApi.WorkpackageApi();document.getElementById('i1gdp').onclick = (event) => {
    event.preventDefault();
    { location.href= '/ProjectPage';}};document.getElementById('ivg5k').onclick = (event) => {
    event.preventDefault();
    { location.href= '/workpackage';}};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("iuh5n").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectName'){
        subDataElements[i].textContent = data[data.length -i -1].projectName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'projectDesc']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].projectDesc;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'projectDesc'){
        subDataElements[i].textContent = data[data.length -i -1].projectDesc;
        
      }
     } catch (e) { console.log(e) };
        subDataElements[i].addEventListener('click',() => {{ location.href= '/UpdateProject/'+data[data.length -i -1]._id+'';}} )
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});apiWorkpackageApi.getAllworkpackage((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements = document.getElementById("i3b95").querySelectorAll( "[dataitem='true']" );
  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wpName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].wpName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'wpName'){
        subDataElements[i].textContent = data[data.length -i -1].wpName;
        
      }
     } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'wpDesc']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].wpDesc;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'wpDesc'){
        subDataElements[i].textContent = data[data.length -i -1].wpDesc;
        
      }
     } catch (e) { console.log(e) };
        
      }
    });
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};
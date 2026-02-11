function deleteMails() {
  var mymail = "test@domain.com"; //enter your email account

   var d = new Date();
   d.setDate(d.getDate() - 40); //you can change number of days
   var start_date = formatDate(d);
   var pageToken;
   do {
     var threadList = Gmail.Users.Threads.list(mymail, {
        q: 'before:' + start_date,
        pageToken: pageToken
     });
     if (threadList.threads && threadList.threads.length > 0) {
       threadList.threads.forEach(function(thread) {
         Logger.log('id: %s snippet: %s', thread.id, thread.snippet);
         try{
           Gmail.Users.Threads.remove(mymail, thread.id);
           Logger.log('id: %s snippet: %s REMOVED', thread.id, thread.snippet);
         }catch(e){
           Logger.log(e);
         }
        
       });
     }
     pageToken = threadList.nextPageToken;
   } while (pageToken);
}

function formatDate(d) {
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}





    //Delete all Sessions  
    function deleteAllSessions(){  
     
        conRest('/session/all', 'DELETE', {}, ()=>{})
        $(".session").remove();
    }
    
    //Delete one Session
    function deleteSession(sessionToDelete, itemId){  
     
        conRest('/session', 'DELETE', {sessionToDelete}, ()=>{})
        $("#"+itemId).remove(); 
    }
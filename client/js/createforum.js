$(document).ready(function(){$('#createforum').on('submit',function(e){e.preventDefault();var $this=$(this);$.ajax({url:$this.attr('action'),type:$this.attr('method'),data:$this.serialize(),dataType:'json',success:function(json){if(json.response==='success'){new PNotify({title:'Création terminé',text:'Votre discussion est maintenant posté',addclass:'bg-success'});$('#sujet').val('');$('#contenu').val('');window.setTimeout(function(){window.location="forum"},1500)}else{var error=json.response;new PNotify({title:'Attention',text:error,addclass:'bg-warning'})}}})})});
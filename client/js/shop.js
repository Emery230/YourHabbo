$(document).ready(function(){$('#vipbasic').on('submit',function(e){e.preventDefault();var $this=$(this);$.ajax({url:$this.attr('action'),type:$this.attr('method'),data:$this.serialize(),dataType:'json',success:function(json){if(json.response==='success'){new PNotify({title:'Félicitation',text:'Vous êtes maintenant VIP Basic',addclass:'bg-success'})}else{var error=json.response;new PNotify({title:'Attention',text:error,addclass:'bg-warning'})}}})});$('#vipplus').on('submit',function(e){e.preventDefault();var $this=$(this);$.ajax({url:$this.attr('action'),type:$this.attr('method'),data:$this.serialize(),dataType:'json',success:function(json){if(json.response==='success'){new PNotify({title:'Félicitation',text:'Vous êtes maintenant VIP Plus',addclass:'bg-success'})}else{var error=json.response;new PNotify({title:'Attention',text:error,addclass:'bg-warning'})}}})});$('#vipultime').on('submit',function(e){e.preventDefault();var $this=$(this);$.ajax({url:$this.attr('action'),type:$this.attr('method'),data:$this.serialize(),dataType:'json',success:function(json){if(json.response==='success'){new PNotify({title:'Félicitation',text:'Vous êtes maintenant VIP Ultime',addclass:'bg-success'})}else{var error=json.response;new PNotify({title:'Attention',text:error,addclass:'bg-warning'})}}})});$('#badge').on('submit',function(e){e.preventDefault();var $this=$(this);$.ajax({url:$this.attr('action'),type:$this.attr('method'),data:$this.serialize(),dataType:'json',success:function(json){if(json.response==='success'){new PNotify({title:'Félicitation',text:'Vous venez d\'acheter un badge',addclass:'bg-success'})}else{var error=json.response;new PNotify({title:'Attention',text:error,addclass:'bg-warning'})}}})})});
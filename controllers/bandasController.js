
const bandas = require('../db/index')



const bandasController= {
  index: function (req,res) {
    return res.render("listadoBandas",{
      index: bandas.lista}
    )}
    ,filtrarPorGenero: function(req,res){
      let generoBandas = req.params.genero;
      let resultado= [];
      for (let i = 0; i < bandas.lista.length; i++) {
          if(generoBandas == bandas.lista[i].genero){
            resultado.push(bandas.lista[i])
          }
        
        
      }
      if(resultado.length==0){
        return res.send('No hay banda con el género' + generoBandas )
      }else{
        return res.render("detalleGenero",{index:resultado})
      }
    
    }
    ,filtrarPorId: function (req,res) {
      let idBandas= req.params.id;
      let resultado= [];
      for (let i = 0; i < bandas.lista.length; i++) {
        if(idBandas == bandas.lista[i].id){
          resultado.push(bandas.lista[i])
        }
        
      }
      if(resultado.lenght==0){
        return res.send('No hay banda con el id'+idBandas)
      }else{
        return res.render('detalleBanda',{index:resultado})
      }
        
        
      }
      
    }
    


module.exports= bandasController;
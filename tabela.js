var data = {
          resource_id: '5ec72808-85d4-4acd-abb4-b06d7107e718', // the resource id
          limit: 5, // get 5 results
          q: 'jones' // query for 'jones'
        };
        $.ajax({
          url: 'http://dados.recife.pe.gov.br/nl/api/3/action/datastore_search',
          data: data,
          dataType: 'jsonp',
          success: function(data) {
            alert('Total results found: ' + data.result.total)
          }
        });
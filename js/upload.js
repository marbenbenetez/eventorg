

$(document).on("click", "#changeprofile", (e)=>{

    $("#changeprofilepic").modal("show");
      console.log(e.target.dataset);
      FilePond.registerPlugin(
      // encodes the file as base64 data
      FilePondPluginFileEncode,
      
      // validates files based on input type
      FilePondPluginFileValidateType,
      
      // corrects mobile image orientation
      FilePondPluginImageExifOrientation,
      
      // previews the image
      FilePondPluginImagePreview,
      
      // crops the image to a certain aspect ratio
      FilePondPluginImageCrop,
      
      // resizes the image to fit a certain size
      FilePondPluginImageResize,
      
      // applies crop and resize information on the client
      FilePondPluginImageTransform
    );
    // Select the file input and use create() to turn it into a pond
    var y = FilePond.create(
      document.querySelector('.filepond1'),
      {
      labelIdle: `Drag & Drop your files or <span class="filepond--label-action">Browse</span>`,
      imagePreviewHeight: 150,
      imageCropAspectRatio: '1:1',
      }
    );
    FilePond.setOptions({
        server: {
        url: './api',
        timeout: 7000,
        process: {
            url: '/change-profile-picture',
            method: 'POST',
            withCredentials: false,
            onload: (response) => {
            let data = JSON.parse(response);
            let detail = "updated his/her profile picture.";
            update_info(detail); 
            $("#profilepic").empty().append(`
			       <img class="img-circle" id="changeprofile" data-userid="${data.userid}" src="${data.img}" style="cursor: pointer; width: 100px; height: 100px;" alt="User Avatar">
            `);
            document.getElementById("navimage").setAttribute("src", data.img);
            $("#changeprofilepic").modal("hide");
            },
            ondata: (formData) => {
                formData.append('userid', e.target.dataset.userid);
                return formData;
            },
        },      
      },
    });
    y.removeFiles();

});

$(document).on("click", "#changecover", (e)=>{

$("#changecoverphoto").modal("show");

      FilePond.registerPlugin(
      // encodes the file as base64 data
      FilePondPluginFileEncode,
      
      // validates files based on input type
      FilePondPluginFileValidateType,
      
      // corrects mobile image orientation
      FilePondPluginImageExifOrientation,
      
      // previews the image
      FilePondPluginImagePreview,
      
      // crops the image to a certain aspect ratio
      FilePondPluginImageCrop,
      
      // resizes the image to fit a certain size
      FilePondPluginImageResize,
      
      // applies crop and resize information on the client
      FilePondPluginImageTransform
    );
    // Select the file input and use create() to turn it into a pond
    var x = FilePond.create(
      document.querySelector('.filepond2'),
      {
      labelIdle: `Drag & Drop your files or <span class="filepond--label-action">Browse</span>`,
      imagePreviewHeight: 150,
      imageCropAspectRatio: '1:1',
      }
    );
    FilePond.setOptions({
        server: {
        url: './api',
        timeout: 7000,
        process: {
            url: '/change-cover-photo',
            method: 'POST',
            withCredentials: false,
            onload: (response) => {
            let data = JSON.parse(response);  
            let detail = "updated his/her cover photo.";
            update_info(detail); 
            document.getElementById('changecover').setAttribute("style", "background: url('"+data.img+"') center center; cursor: pointer;")
            $("#changecoverphoto").modal("hide");
            },
            ondata: (formData) => {
                formData.append('userid', e.target.dataset.userid);
                return formData;
            },
        },      
      },
    });
    x.removeFiles();
});

$(document).on("click", "#uploadachievements", ()=>{

$("#myachievements").modal("show");
      FilePond.registerPlugin(
      // encodes the file as base64 data
      FilePondPluginFileEncode,
      
      // validates files based on input type
      FilePondPluginFileValidateType,
      
      // corrects mobile image orientation
      FilePondPluginImageExifOrientation,
      
      // previews the image
      FilePondPluginImagePreview,
      
      // crops the image to a certain aspect ratio
      FilePondPluginImageCrop,
      
      // resizes the image to fit a certain size
      FilePondPluginImageResize,
      
      // applies crop and resize information on the client
      FilePondPluginImageTransform
    );
    // Select the file input and use create() to turn it into a pond
    var z = FilePond.create(
      document.querySelector('.filepond20'),
      {
      labelIdle: `Drag & Drop your files or <span class="filepond--label-action">Browse</span>`,
      imagePreviewHeight: 150,
      imageCropAspectRatio: '1:1',
      }
    );
    FilePond.setOptions({
        server: {
        url: './api',
        timeout: 7000,
        process: {
            url: '/add-accomplishments',
            method: 'POST',
            withCredentials: false,
            onload: (response) => {
            let data = JSON.parse(response);  
            let detail = "uploaded some pictures for achievements.";
            update_info(detail); 
            $("#images").append(`
    <div class="col-sm-5 col-md-3">
              <div class="col-sm-5 col-md-3">
              <center>
                <a target="_blank" href="${data.img}">
                  <img src="${data.img}" class="imgthumb" alt="Forest" style="width:250px; border: 1px solid #ddd; border-radius: 4px; padding: 5px; margin-top: 10px;">
                </a>
              </center>  
              </div>
    </div>
            `);


            $("#myachievements").modal("hide");
            // document.getElementById('changecover').setAttribute("style", "background: url('"+data.img+"') center center; cursor: pointer;")
            // $("#changecoverphoto").modal("hide");
            },

        },      
      },
    });
    z.removeFiles();
});

$(document).on("click", "#accomplishments", ()=>{
$("#uploadAccomplishments").modal("show");

      FilePond.registerPlugin(
      // encodes the file as base64 data
      FilePondPluginFileEncode,
      
      // validates files based on input type
      FilePondPluginFileValidateType,
      
      // corrects mobile image orientation
      FilePondPluginImageExifOrientation,
      
      // previews the image
      FilePondPluginImagePreview,
      
      // crops the image to a certain aspect ratio
      FilePondPluginImageCrop,
      
      // resizes the image to fit a certain size
      FilePondPluginImageResize,
      
      // applies crop and resize information on the client
      FilePondPluginImageTransform
    );
    // Select the file input and use create() to turn it into a pond
    var x = FilePond.create(
      document.querySelector('.filepond11'),
      {
      labelIdle: `Drag & Drop your files or <span class="filepond--label-action">Browse</span>`,
      imagePreviewHeight: 150,
      imageCropAspectRatio: '1:1',
      }
    );
    FilePond.setOptions({
        server: {
        url: './api',
        timeout: 7000,
        process: {
            url: '/upload-accomplishment',
            method: 'POST',
            withCredentials: false,
            onload: (response) => {
            let data = JSON.parse(response);  
            let detail = "uploaded some pictures for achievements.";
            update_info(detail); 
            $("#uploadAccomplishments").modal("hide");
            $("#uploadedAccomplishments").empty();
            $.each(data.file, (indx, img)=>{
            $("#uploadedAccomplishments").append(`
            <div class="col-md-4" style="margin-top: 10px;">  
              <div class="card-body container32" style="background-color: white;">
              <img src="${img.img}" alt="Avatar" class="image" style="width:100%">
              <div class="middle">
                <div class="text">${img.des}</div>
                <a id="viewfullimage" data-url="${img.img}" style="cursor: pointer; color: blue;"><u style="pointer-events: none;">View full image.</u></a>
              </div>
              </div>
            </div>  
            `);  
            });

            },
            ondata: (formData) => {
                formData.append('description', $("#imageDes").val());
                return formData;
            },
        },      
      },
    });
    x.removeFiles();


});


$(document).on("click", "#addAds", (e)=>{

$("#adsTemplate").modal("show");

      FilePond.registerPlugin(
      // encodes the file as base64 data
      FilePondPluginFileEncode,
      
      // validates files based on input type
      FilePondPluginFileValidateType,
      
      // corrects mobile image orientation
      FilePondPluginImageExifOrientation,
      
      // previews the image
      FilePondPluginImagePreview,
      
      // crops the image to a certain aspect ratio
      FilePondPluginImageCrop,
      
      // resizes the image to fit a certain size
      FilePondPluginImageResize,
      
      // applies crop and resize information on the client
      FilePondPluginImageTransform
    );
    // Select the file input and use create() to turn it into a pond
    var c = FilePond.create(
      document.querySelector('.filepond13'),
      {
      labelIdle: `Drag & Drop your files or <span class="filepond--label-action">Browse</span>`,
      imagePreviewHeight: 150,
      imageCropAspectRatio: '1:1',
      }
    );
    FilePond.setOptions({
        server: {
        url: './api',
        timeout: 7000,
        process: {
            url: '/upload-ads',
            method: 'POST',
            withCredentials: false,
            onload: (response) => {
            let data = JSON.parse(response);  
            console.log(data.img);
            $("#sponsordata").prepend(`
                    <tr>
                      <td>${data.sponsor}</td>
                      <td>${data.link}</td>
                      <td>
                        <div>
                          <img style="width: 100px; height: 100px;" src="${data.img}">
                        </div>
                      </td>
                      <td>
                      <button class="btn btn-primary btn-sm" id="editads" data-adid="${data.id}">Edit</button>
                      <button class="btn btn-danger btn-sm" id="deleteads" data-adid="${data.id}">Delete</button>
                      <button class="btn btn-info btn-sm" id="editadsimg" data-adid="${data.id}">Edit Image</button>
                      </td>
                    </tr>
            `);
            $("#adsTemplate").modal("hide");
            },
            ondata: (formData) => {
                formData.append('sponsorname', $("#sponsorname").val());
                formData.append('weburl', $("#weburl").val());
                return formData;
            },
        },      
      },
    });
    c.removeFiles();
    
});
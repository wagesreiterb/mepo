$(function(){


	//+++++ Class Msisdn
	function Msisdn () {
		console.log('Object Msisdn instantiated');
		this.typeOfButton = 'btn-success';  //btn-danger, btn-success
		var glyphiconForButton = 'glyphicon-plus'; //glyphicon-plus, glyphicon-minus
		this.rowCount = 0;
		this.testString = "testString" + this.rowCount;
		this.msisdnId;

	}

	Msisdn.prototype.getNewRow = function() {
		console.log("Msisdn::getNewRow()");
		
		if(this.rowCount == 0) {
			this.typeOfButton = 'btn-success';
			glyphiconForButton = 'glyphicon-plus';
		} else {
			this.typeOfButton = 'btn-danger';
			glyphiconForButton = 'glyphicon-minus';
		}
		
		this.msisdnId = "msisdn"+this.rowCount;
		console.log("+++" + this.msisdnId);
		
		rowString = '<div id="rowNewMsisdn'+this.rowCount+'" name="rowNewMsisdn[]" class="col-md-12"> \
								<div class="col-md-4 col-md-offset-0"> \
									<strong> \
										<input id="'+this.msisdnId+'" name="msisdn[]" type="text" data-validation="length alphanumeric" data-validation-allowing="- ,.@_äöüÄÖÜ?=!" data-validation-length="0-11" class="classMsisdn form-control input-lg m-b" data-toggle="tooltip" data-placement="bottom"> \
									</strong> \
								</div> \
								<div class="col-md-1"> \
									<button id="'+this.rowCount+'" name="btnMsisdn[]" type="button" class="btn '+this.typeOfButton+' btnMsisdn btn-lg"><span class="glyphicon '+glyphiconForButton+'"></span></button> \
								</div> \
							</div>';
							

		
		
		this.rowCount = this.rowCount + 1;
		console.log("rowCount: " + this.rowCount);
		

		// $( '#rowNewMsisdn'+this.rowCount+'' ).rules( "add", {
			// minlength: 7
		// });

		
		
		// jQuery.validator.addClassRules("classMsisdn", {
			 // required: true,
			 // minlength: 5
		// });
		
		// jQuery.validator.addClassRules({
			// classMsisdn: {
				// required: true,
				// minlength: 4
			 // }
		// });
									
		return rowString;
	};
	
	Msisdn.prototype.createNewButtonListener = function() {
		console.log("Msisdn::createNewButtonListener");
		
		$(document).on('click', '.btnMsisdn', function(){  
			var button_id = $(this).attr("id");
			if(button_id == 0) {
				$('#dynamicFieldContainerMsisdn').append(myMsisdn.getNewRow());
				
				
		// console.log("---" + myMsisdn.msisdnId);
		// $('#'+myMsisdn.msisdnId+'').rules("add", {
			// required: true,
			// minlength: 6
		// });
				
				
				
			} else {
				$('#rowNewMsisdn'+button_id+'').remove(); 
			}
		});  
	}

	//----- Class Msisdn




	// ----------------------------- HTTP Service -------------------------------
	function httpService () {
		console.log('Object httpService instantiated');
		this.httpServiceString = ' \n \
					<div class="forum-box-a1ta"> \n \
						<div class="forum-box-a1ta panel-heading"> \n \
							<div class="row"> \n \
								<div class="col-md-11"> \n \
									<div class="h5"> \n \
										HTTP Service \n \
									</div> \n \
								</div> \n \
								<section id="modalContactForNoc"></section><!-- modal Dialog --> \n \
							</div> \n \
						</div> \n \
						<div class="forum-box-a1ta panel-body"> \n \
							<div class="form-group p-xxs">\n \
								<div class="row vertical-align-top-a1ta"> \n \
									<div class="col-md-3"> \n \
										<label class="col-md-12 control-label text-right">Zielsystem der HTTP-Anbindung:</label>\n \
									</div>\n \
									<div class="col-md-8">\n \
										<div class="col-md-4">\n \
											<div class="radio radio-success radio-inline">\n \
												<input type="radio" id="inlineRadioLAN" value="inlineRadioLAN" name="radioInlineHTTPConnection" checked="">\n \
												<label for="inlineRadioLAN"> LAN intern  </label>\n \
											</div>\n \
										</div>\n \
										<div class="col-md-4">\n \
											<div class="radio radio-success radio-inline">\n \
												<input type="radio" id="inlineRadioVPN" value="inlineRadioVPN" name="radioInlineHTTPConnection">\n \
												<label for="inlineRadioVPN"> VPN </label>\n \
											</div>\n \
										</div>\n \
										<div class="col-md-4">\n \
											<div class="radio radio-success radio-inline">\n \
												<input type="radio" id="inlineRadioProxy" value="inlineRadioProxy" name="radioInlineHTTPConnection">\n \
												<label for="inlineRadioProxy"> Proxy </label>\n \
											</div>\n \
										</div> \n \
									</div>\n \
									<div class="col-md-1">\n \
										<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="Übertragungsart" data-content="http-GET (plain html), http-POST (xml)">?</button>\n \
									</div>\n \
								</div>\n \
							</div>\n \
							<div class="form-group p-xxs">\n \
								<div class="row vertical-align-top-a1ta">\n \
									<div class="col-md-3 margin-top-a1ta">\n \
										<label class="col-md-12 control-label text-right">ServiceId:</label>\n \
									</div>\n \
									<div class="col-md-8">\n \
										<div class="col-md-12">\n \
											<input type="text" class="form-control input-md">\n \
										</div>\n \
									</div>\n \
									<div class="col-md-1">\n \
									    <button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="ServiceId" data-content="ID der Übertragungsverbindung zwischen A1 HTTP-Gateway und Applikation.">?</button>\n \
									</div>\n \
								</div>\n \
							</div>\n \
							<div class="form-group p-xxs">\n \
								<div class="row vertical-align-top-a1ta">\n \
									<div class="col-md-3 margin-top-a1ta">\n \
										<label class="col-md-12 control-label text-right">IP-Adresse(n), Application Host(s):</label>\n \
									</div>\n \
									<div class="col-md-8">\n \
										<div class="col-md-12">\n \
											<textarea class="form-control vresize" rows="1" id="kdb_address"></textarea>\n \
										</div>\n \
									</div>\n \
									<div class="col-md-1">\n \
									    <button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="IP-Adresse(n), Application Host(s)" data-content="Todo: do muas ma de IP-Adressen oder de Hostnomen eitrogn! Vastehst?">?</button>\n \
									</div>\n \
								</div>\n \
							</div>\n \
							<div class="form-group p-xxs">\n \
								<div class="row vertical-align-top-a1ta">\n \
									<div class="col-md-3">\n \
										<label class="col-md-12 control-label text-right">Serviceart:</label>\n \
									</div>\n \
									<div class="col-md-8">\n \
										<div class="col-md-5">\n \
											<div class="checkbox checkbox-success checkbox-inline">\n \
												<input type="checkbox" id="inlineCheckboxSmsSend" name="inlineCheckboxSmsSend" value="option1" checked="">\n \
												<label for="inlineCheckbox1"> SMS senden </label>\n \
											</div>\n \
										</div>\n \
										<div class="col-md-5">\n \
											<div class="checkbox checkbox-success checkbox-inline">\n \
												<input type="checkbox" id="inlineCheckboxSmsReceive" name="inlineCheckboxSmsReceive" value="option1">\n \
												<label for="inlineCheckbox2"> SMS empfangen </label>\n \
											</div>\n \
										</div>\n \
									</div>\n \
									<div class="col-md-1">\n \
										<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="Todo" data-content="xxxxxxx">?</button>\n \
									</div>\n \
								</div>\n \
							</div>\n \
							<div id="dynamicFieldReceiverApplicationUrlContainer">\n \
							</div>\n \
							<div class="form-group p-xxs">\n \
								<div class="row vertical-align-top-a1ta">\n \
									<div class="col-md-3">\n \
										<label class="col-md-12 control-label text-right">Übertragungsart:</label>\n \
									</div>\n \
									<div class="col-md-8">\n \
										<div class="col-md-5">\n \
											<div class="radio radio-success radio-inline">\n \
												<input type="radio" id="inlineRadioHttpGet" value="inlineRadioHttpGet" name="radioInlineRequestMethod" checked="">\n \
												<label for="inlineRadioHttpGet"> http-GET </label>\n \
											</div>\n \
										</div>\n \
										<div class="col-md-5">\n \
											<div class="radio radio-success radio-inline">\n \
												<input type="radio" id="inlineRadioHttpPost" value="inlineRadioHttpPost" name="radioInlineRequestMethod">\n \
												<label for="inlineRadioHttpPost"> http-POST </label>\n \
											</div>\n \
										</div>\n \
									</div>\n \
									<div class="col-md-1">\n \
										<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="Übertragungsart" data-content="http-GET (plain html), http-POST (xml)">?</button>\n \
									</div>\n \
								</div>\n \
							</div>\n \
						</div>\n \
					</div>';
	}

	httpService.prototype.getField = function() {
		console.log("httpService::getField()");
		
		return this.httpServiceString;
	};



//############################################################################################################################################
//#
//# Billing Information
//#
//############################################################################################################################################
	function BillingInformation () {
		console.log('Object BillingInformationen instantiated');
		var typeOfButton = 'btn-success';  //btn-danger, btn-success
		var glyphiconForButton = 'glyphicon-plus'; //glyphicon-plus, glyphicon-minus
		this.billingInformationRowCount = 0;
		this.testString = "testString" + this.billingInformationRowCount;
		this.billingInformationRowString = '\n \
								//<tr id="billingInformationRow'+this.billingInformationRowCount+'">\n \
								<tr id="billingInformationRowx[]">\n \
									<td width="20%">\n \
										<input type="text" name="name" placeholder="08006641234" class="form-control name_list"/>\n \
									</td>\n \
									<td width="17%">\n \
										<select class="form-control" id="billingInformationRowBillingType'+this.billingInformationRowCount+'" name="billingInformationRowBillingType'+billingInformationRowCount+'">\n \
											<option>MO-Billing</option>\n \
											<option>MT-VAS-SMS-Billing</option>\n \
											<option>MT-VAS-MMS-Billing</option>\n \
										</select>\n \
									</td>\n \
									<td width="8%">\n \
										<select class="form-control" name="direction">\n \
											<option>MO</option>\n \
											<option>MT</option>\n \
										</select>\n \
									</td>\n \
									<td width="10%">\n \
										<select class="form-control" name="type">\n \
											<option>SMS</option>\n \
											<option>MMS</option>\n \
										</select>\n \
									</td>\n \
									<td width="10%">\n \
										<input type="text" name="name" placeholder="lt. Tarif" class="form-control name_list"/>\n \
									</td>\n \
									<td width="10%">\n \
										<input type="text" name="name" placeholder="lt. Tarif" class="form-control name_list"/>\n \
									</td>\n \
									<td width="15%">\n \
										<div class="input-group date" id="datepickerDatumValidUntil">\n \
												<span class="input-group-addon">\n \
													<span class="fa fa-calendar"></span>\n \
												</span>\n \
											<input type="text" class="form-control" name="datepickerDatumValidUntil"/>\n \
										</div>\n \
									</td>\n \
									<td>\n \
									</td>\n \
										<td width="5%">\n \
										<button type="button" id="billingInformationRowButton'+this.billingInformationRowCount+'" name="billingInformationRowButton'+billingInformationRowCount+'" class="btn '+typeOfButton+'"><span class="glyphicon '+glyphiconForButton+'"></span></button>\n \
									</td>\n \
								</tr>\n';
	}

	BillingInformation.prototype.getNewRow = function() {
		console.log("BillingInformation::getNewRow()");
		
		if(billingInformationRowCount == 0) {
			typeOfButton = 'btn-success';
			glyphiconForButton = 'glyphicon-plus';
		} else {
			typeOfButton = 'btn-danger';
			glyphiconForButton = 'glyphicon-minus';
		}
		
		return this.billingInformationRowString;
	};
	
	BillingInformation.prototype.createNewButtonListener = function() {
		console.log("BillingInformation::createNewButtonListener");
		
		document.getElementById("billingInformationRowButton"+billingInformationRowCount).addEventListener('click', function() {
			console.log("billingInformationCreateButtonListener::billingInformationRowButton'+billingInformationRowCount+'" + ".click()");
			$('#dynamicFieldbillingInformationContainer').append(createNewBillingInformationRow());
			billingInformationCreateDropdownListener();
			billingInformationRowCount++;
		});
	}
	
	BillingInformation.prototype.printTestString = function() {
		console.log("Teststring:" + this.testString);
	};
	
	
	// function billingInformationCreateButtonListener() {
		// console.log("billingInformationCreateButtonListener::billingInformationRowButton"+billingInformationRowCount);
		// document.getElementById("billingInformationRowButton"+billingInformationRowCount).addEventListener('click', function() {
			// console.log("billingInformationCreateButtonListener::billingInformationRowButton'+billingInformationRowCount+'" + ".click()");
			// $('#dynamicFieldbillingInformationContainer').append(createNewBillingInformationRow());
			// billingInformationCreateDropdownListener();
			// billingInformationRowCount++;
		// });
	// }
	
	
	
	
	var myBillingInformation = new BillingInformation();
	myBillingInformation.printTestString();
	var arrayBillingInformation = [];
    arrayBillingInformation.push(myBillingInformation);
	// for (var i = 0; i < 10; i+=1) {
		// elem = $("<span />").attr("class","foo-"+i).text("hello");
		// collection.push(elem);
	// }
	
//############################################################################################################################################
//#
//# --- Billing Information
//#
//############################################################################################################################################
	
	var myMsisdn = new Msisdn();
	myMsisdn.createNewButtonListener();


	
	var myHttpService = new httpService();
	
	
	//+++ global variables
	var billingInformationRowCount = 0;
	//--- global variables
	
	
	//modal Dialog
	$(document).ready(function() {
		$("#modalCreateNewServiceMsisdn").load("modalCreateNewServiceMsisdn.html");
		$("#modalCreateNewServiceGeneralInformation").load("modalCreateNewServiceGeneralInformation.html");
		$("#modalCreateNewServiceAntragAuf").load("modalCreateNewServiceAntragAuf.html");
		$("#modalCreateNewServiceTypeOfService").load("modalCreateNewServiceTypeOfService.html");
		$("#modalCreateNewServiceArtDerAnbindung").load("modalCreateNewServiceArtDerAnbindung.html");
		$("#modalCreateNewServiceDate").load("modalCreateNewServiceDate.html");		
		$("#modalCreateNewServiceShortDescription").load("modalCreateNewServiceShortDescription.html");
		$("#modalCreateNewServiceResponsibleA1").load("modalCreateNewServiceResponsibleA1.html");
		$("#modalCreateNewServiceKdb").load("modalCreateNewServiceKdb.html");
		$("#modalCreateNewServiceIda").load("modalCreateNewServiceIda.html");
		$("#modalCreateNewServiceDescriptionMessageFlow").load("modalCreateNewServiceDescriptionMessageFlow.html");
		$("#modalCreateNewServiceRtr").load("modalCreateNewServiceRtr.html");
		$("#modalBillingInformationen").load("modalBillingInformationen.html");
		$("#modalContactForContent").load("modalContactForContent.html");
		$("#modalContactForNoc").load("modalContactForNoc.html");
		$("#modalSpecialInformation").load("modalSpecialInformation.html");
		
		//+++ Billing Information	
		//$('#dynamicFieldbillingInformationContainer').append(createNewBillingInformationRow());
		//billingInformationCreateButtonListener();
		//billingInformationCreateDropdownListener();		
		//billingInformationRowCount++;		
		//--- Billing Information
		
		$('#dynamicFieldbillingInformationContainer').append(myBillingInformation.getNewRow());
		$('#dynamicFieldContainerMsisdn').append(myMsisdn.getNewRow());
		$('#dynamicFieldContainerHttpService').append(httpService.getField());
		
		
		// jQuery.validator.addClassRules({
			// classMsisdn: {
				// required: true,
				// minlength: 4
			 // }
		// });
	});
	
	
	
	$("#inlineCheckboxSmsReceive").change(function() {
	    if(this.checked) {
			console.log("inlineCheckboxSmsReceive.click.isChecked");
			$('#dynamicFieldReceiverApplicationUrlContainer').append(' \
				<div class="form-group p-xxs" id="dynamicFieldReceiverApplicationUrl"> \
					<div class="row vertical-align-top-a1ta"> \
						<div class="col-md-3"> \
							<label class="col-md-12 control-label text-right">Empfänger Applikations-URL:</label> \
						</div> \
						<div class="col-md-8"> \
							<div class="col-md-12"> \
								<input type="text" class="form-control input-md"> \
							</div> \
						</div> \
						<div class="col-md-1"> \
							<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="Application URL" data-content="Für den Empfang von Nachrichten auf der Applikation.">?</button> \
						</div> \
					</div> \
				</div>');
		} else {
			console.log("inlineCheckboxSmsReceive.click.isNotChecked");
			$('#dynamicFieldReceiverApplicationUrl').remove();
		}
	});
	
	


	
	
	
	// Spezifische Informationen je Dienstenummer  
	var iNewSpezifischeInformation=1;  
	$('#addNewSpezifischeInformation').click(function(){  
	   iNewSpezifischeInformation++;  
	   $('#spezifischeInformationen').append('\n \
			<tr id="spezifischeInformationen'+iNewSpezifischeInformation+'">\n \
				<td width="20%">\n \
					<input type="text" name="name" placeholder="08006641234" class="form-control name_list"/>\n \
				</td>\n \
				<td width="8%">\n \
					<select class="form-control" name="direction">\n \
						<option>MO</option>\n \
						<option>MT</option>\n \
					</select>\n \
				</td>\n \
				<td width="10%">\n \
					<select class="form-control" name="type">\n \
						<option>SMS</option>\n \
						<option>MMS</option>\n \
					</select>\n \
				</td>\n \
				<td width="15%">\n \
					<select class="form-control" name="direction">\n \
						<option>a1http</option>\n \
						<option>eatms</option>\n \
						<option>edimoco</option>\n \
						<option>esmsat</option>\n \
					</select>\n \
				</td>\n \
				<td width="6%">\n \
					<input type="text" name="name" placeholder="0" class="form-control name_list"/>\n \
				</td>\n \
				<td width="15%">\n \
					<select class="form-control" name="type">\n \
						<optgroup label="most frequently used">\n \
							<option>A1TA</option>\n \
							<option>ATMS Large</option>\n \
							<option>DIMOCO Large</option>\n \
						</optgroup>\n \
						<optgroup label="less frequently used">\n \
							<option>Alcatel</option>\n \
							<option>bob</option>\n \
							<option>Dolphin Technolgies</option>\n \
							<option>InternetQ</option>\n \
							<option>IQ-Mobile</option>\n \
							<option>IT-Austria</option>\n \
							<option>LBS logics</option>\n \
							<option>LKW Walter</option>\n \
							<option>Magna Steyr</option>\n \
							<option>MASS response</option>\n \
							<option>Materna</option>\n \
							<option>Minick AG</option>\n \
							<option>mk Lichtenstein</option>\n \
							<option>MMS.ag</option>\n \
							<option>net mobile</option>\n \
							<option>netsize</option>\n \
							<option>nic.at</option>\n \
							<option>NTH AG</option>\n \
							<option>paybox</option>\n \
							<option>Shell-Direct</option>\n \
							<option>sms.at</option>\n \
							<option>Software-Management</option>\n \
							<option>Telekom</option>\n \
							<option>tobaccoland</option>\n \
							<option>track&act</option>\n \
							<option>UBIS Austria GmbH</option>\n \
							<option>Verisign</option>\n \
							<option>VIPnet</option>\n \
							<option>Vitaphone</option>\n \
							<option>voestalpine</option>\n \
							<option>Whatever Mobile</option>\n \
							<option>&Ouml;FPC Arsenal GmbH</option>\n \
						</optgroup>\n \
					</select>\n \
				</td>\n \
				<td width="15%">\n \
					<div class="input-group date" id="datepickerDatumValidUntil">\n \
							<span class="input-group-addon">\n \
								<span class="fa fa-calendar"></span>\n \
							</span>\n \
						<input type="text" class="form-control" name="datepickerDatumValidUntil"/>\n \
					</div>\n \
				</td>\n \
				<td>\n \
				</td>\n \
				<td width="5%">\n \
					<button type="button" name="removeNewSpezifischeInformation" id="'+iNewSpezifischeInformation+'"  class="btn btn-danger btn_removeSpezifischeInformation"><span class="glyphicon glyphicon-minus"></span></button> \n\
				</td>\n \
			</tr>');
	});  
	$(document).on('click', '.btn_removeSpezifischeInformation', function(){  
		var button_id = $(this).attr("id");   
		$('#spezifischeInformationen'+button_id+'').remove();  
	});  
	

	
	// Beschreibung des Nachrichtenablaufs 
	var iDescriptionMessageflow=1;  
	$('#addNewMessageFlow').click(function(){  
	   iDescriptionMessageflow++;  
	   $('#messageFlow').append(
						'<div class="row margin-bottom-a1ta-10px" id="rowMessageflow'+iDescriptionMessageflow+'"> \
							<div class="col-md-3"> \
								<input type="text" name="name" placeholder="08006641234" class="form-control name_list"/> \
							</div> \
							<div class="col-md-1"> \
								<select class="form-control" name="direction"> \
									<option>MO</option> \
									<option>MT</option> \
								</select> \
							</div> \
							<div class="col-md-1"> \
								<select class="form-control" name="type"> \
									<option>SMS</option> \
									<option>MMS</option> \
								</select> \
							</div> \
							<div class="col-md-5"> \
								<textarea class="form-control vresize" rows="1" id="textareaMessagecontent"></textarea> \
							</div> \
							<div class="col-md-1"> \
								<input type="text" name="name" placeholder="0,00" class="form-control name_list"/> \
							</div> \
							<div class="col-md-1"> \
								<button type="button" name="btnRemoveMessageflow" id="'+iDescriptionMessageflow+'" class="btn btn-danger btn_removeDescriptionMessageflow"><span class="glyphicon glyphicon-minus"></span></button> \
							</div> \
						</div>');
	});  
	$(document).on('click', '.btn_removeDescriptionMessageflow', function(){  
	   var button_id = $(this).attr("id");   
	   $('#rowMessageflow'+button_id+'').remove();  
	}); 
	// Beschreibung des Nachrichtenablaufs 
	


	//+++ new validation plugin http://www.formvalidator.net/
	$.validate({
		lang: 'en',
		modules: 'sanitize'
	});
	
	$('#shortDescriptionTextarea').restrictLength( $('#shortDescriptionMaxLength') );
	//--- new validation plugin

	// // Input Validation
	// $("#form").validate({
		// // rules: {
			// // 'msisdn[]': {
				// // required: true,
				// // minlength: 5
			// // },
			// // password: {
				// // required: true,
				// // minlength: 3
			// // },
			// // url: {
				// // required: true,
				// // url: true
			// // },
			// // number: {
				// // required: true,
				// // number: true
			// // },
			// // max: {
				// // required: true,
				// // maxlength: 4
			// // }
		// // },
		// messages: {
			// serviceMsisdn: {
				// required: "Geben Sie eine gültige MSISDN ein!",
				// minlength: "Die MSISDN muss mindestens 3 Stellen lang sein!"
			// }
		// },
		// submitHandler: function(form) {
			// console.log("submitHandler: form");
			// //form.submit();
			// // var errors = validator.numberOfInvalids();
			// // if (errors) {
				// // console.log("aa form.validate::errors");
			// // } else {
				// // console.log("aa form.validate::NO.errors");
				// // $.post("testAjaxPost.php", $("#form").serialize(), function(data) {
					// // alert(data);
					// // return false;
				// // });
			// // }
		// }
	// });
	
	
	
	// --------------------- Billing Information ----------------------
	//var billingInformationRowCount=1;

	// function createNewBillingInformationRow() {
		// var billingInformationRowString = '\n \
	   								// <tr id="billingInformationRow'+billingInformationRowCount+'">\n \
										// <td width="20%">\n \
											// <input type="text" name="name" placeholder="08006641234" class="form-control name_list"/>\n \
										// </td>\n \
										// <td width="17%">\n \
											// <select class="form-control" id="billingInformationRowBillingType'+billingInformationRowCount+'" name="billingInformationRowBillingType'+billingInformationRowCount+'">\n \
												// <option>MO-Billing</option>\n \
												// <option>MT-VAS-SMS-Billing</option>\n \
												// <option>MT-VAS-MMS-Billing</option>\n \
											// </select>\n \
										// </td>\n \
										// <td width="8%">\n \
											// <select class="form-control" name="direction">\n \
												// <option>MO</option>\n \
												// <option>MT</option>\n \
											// </select>\n \
										// </td>\n \
										// <td width="10%">\n \
											// <select class="form-control" name="type">\n \
												// <option>SMS</option>\n \
												// <option>MMS</option>\n \
											// </select>\n \
										// </td>\n \
										// <td width="10%">\n \
											// <input type="text" name="name" placeholder="lt. Tarif" class="form-control name_list"/>\n \
										// </td>\n \
										// <td width="10%">\n \
											// <input type="text" name="name" placeholder="lt. Tarif" class="form-control name_list"/>\n \
										// </td>\n \
										// <td width="15%">\n \
											// <div class="input-group date" id="datepickerDatumValidUntil">\n \
													// <span class="input-group-addon">\n \
														// <span class="fa fa-calendar"></span>\n \
													// </span>\n \
												// <input type="text" class="form-control" name="datepickerDatumValidUntil"/>\n \
											// </div>\n \
										// </td>\n \
										// <td>\n \
										// </td>\n \
		// ';
		// if(billingInformationRowCount == 0) {
			// //append Plus-Button
			// billingInformationRowString += '													<td width="5%">\n \
											// <button type="button" id="billingInformationRowButton'+billingInformationRowCount+'" name="billingInformationRowButton'+billingInformationRowCount+'" class="btn btn-success"><span class="glyphicon glyphicon-plus"></span></button>\n \
										// </td>';
		// } else {
			// //append Minus-Button
			// billingInformationRowString += '										<td width="5%">\n \
											// <button type="button" id="billingInformationRowButton'+billingInformationRowCount+'" name="billingInformationRowButton'+billingInformationRowCount+'" class="btn btn-danger btn_removeBillingInformation"><span class="glyphicon glyphicon-minus"></span></button> \
										// </td>\n \
									// </tr>\n';
		// }
		
		// return billingInformationRowString;
	// }
	
	function billingInformationCreateButtonListener() {
		console.log("billingInformationCreateButtonListener::billingInformationRowButton"+billingInformationRowCount);
		document.getElementById("billingInformationRowButton"+billingInformationRowCount).addEventListener('click', function() {
			console.log("billingInformationCreateButtonListener::billingInformationRowButton'+billingInformationRowCount+'" + ".click()");
			$('#dynamicFieldbillingInformationContainer').append(createNewBillingInformationRow());
			billingInformationCreateDropdownListener();
			billingInformationRowCount++;
		});
	}
	
	function billingInformationCreateDropdownListener() {
		console.log("billingInformationCreateDropdownListener()");
		document.getElementById("billingInformationRowBillingType"+billingInformationRowCount).addEventListener('change', function() {
			console.log("this.val(): " + $(this).val());
			console.log("this.id(): " + this.id);
			//iDynamicFieldVasBillingBox++;
			var selectedValue = $(this).val();
			//var selectedValue = document.getElementById(this).value;
			console.log(this.id + "; selectedValue: " +selectedValue);
			if(0 == selectedValue.localeCompare("MT-VAS-SMS-Billing")) {
				//add VAS-Billing Box
				$('#dynamicFieldVasBillingBoxContainer').append(' \
					<div class="forum-box-a1ta" id="dynamicFieldVasBillingBox'+this.id+'"> \
						<div class="forum-box-a1ta panel-heading"> \
							<div class="row"> \
								<div class="col-md-11"> \
									<div class="h5"> \
										VAS-Billing \
									</div> \
								</div> \
								<section id="modalContactForNoc"></section><!-- modal Dialog --> \
							</div> \
						</div> \
						<div class="forum-box-a1ta panel-body"> \
							<div class="form-group p-xxs"> \
								<div class="row vertical-align-top-a1ta"> \
									<div class="col-md-3"> \
										<label class="col-md-12 control-label text-right">VAS-Billing Typ:</label> \
									</div> \
									<div class="col-md-8"> \
										<div class="col-md-5"> \
											<div class="checkbox checkbox-success checkbox-inline"> \
												<input type="checkbox" id="inlineCheckboxVasWapBilling" name="inlineCheckboxSmsSend" value="option1" checked=""> \
												<label for="inlineCheckbox1"> VAS-WAP-Billing </label> \
											</div> \
										</div> \
										<div class="col-md-5"> \
											<div class="checkbox checkbox-success checkbox-inline"> \
												<input type="checkbox" id="inlineCheckboxVasSmsHandshakeBilling" name="inlineCheckboxSmsReceive" value="option1"> \
												<label for="inlineCheckbox2"> VAS-Billing SMS Handshake </label> \
											</div> \
										</div> \
									</div> \
									<div class="col-md-1"> \
										<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="Todo" data-content="xxxxxxx">?</button> \
									</div> \
								</div> \
							</div> \
							<div class="form-group p-xxs"> \
								<div class="row vertical-align-top-a1ta"> \
									<div class="col-md-3 margin-top-a1ta"> \
										<label class="col-md-12 control-label text-right">Merchant ID(s):</label> \
									</div> \
									<div class="col-md-8"> \
										<div class="col-md-12"> \
											<textarea class="form-control vresize" rows="1" id="kdb_address"></textarea> \
										</div> \
									</div> \
									<div class="col-md-1"> \
										<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="IP-Adresse(n), Application Host(s)" data-content="Todo: do muas ma de IP-Adressen oder de Hostnomen eitrogn! Vastehst?">?</button> \
									</div> \
								</div> \
							</div> \
						</div> \
					</div>');
			} else {
				//remove VAS-Billing Box
				//var box_id = $(this).attr("id");   
				//$('#rowNewMsisdn'+box_id+'').remove();  
		   
				//($('#dynamicFieldVasBillingBox'+billingInformationRowCount+'').remove();
				$('#dynamicFieldVasBillingBox'+this.id).remove();  
			}
		});
	}

	//remove billingInformationRow is pressed
	$(document).on('click', '.btn_removeBillingInformation', function(){  
		console.log("click.btn_removeBillingInformation");
		var button_id = $(this).attr("id");   
		console.log(button_id);
		var newString = button_id.replace("Button", "");
		console.log(newString);
		$('#'+newString+'').remove();	//remove billingInformationRow
		$('#dynamicFieldVasBillingBox'+billingInformationRowCount+'').remove(); //remove dynamicFieldVasBillingBox
		billingInformationRowCount--;
		//Todo: muss der Listener auch wieder deregistriert werden?!?
	});  
	
	

	//Billing Information add VAS-Billing Input-Fields
	//var iDynamicFieldVasBillingBox = 1;
	$('#billingInformationRowBillingType'+billingInformationRowCount+'').change(function () {
		//iDynamicFieldVasBillingBox++;
		var selectedValue = $(this).val();
		console.log('billingInformationRowBillingType: '+selectedValue);
		if(0 == selectedValue.localeCompare("MT-VAS-SMS-Billing")) {
			//add VAS-Billing Box
			$('#dynamicFieldVasBillingBoxContainer').append(' \
				<div class="forum-box-a1ta" id="dynamicFieldVasBillingBox'+billingInformationRowCount+'"> \
					<div class="forum-box-a1ta panel-heading"> \
						<div class="row"> \
							<div class="col-md-11"> \
								<div class="h5"> \
									VAS-Billing \
								</div> \
							</div> \
							<section id="modalContactForNoc"></section><!-- modal Dialog --> \
						</div> \
					</div> \
					<div class="forum-box-a1ta panel-body"> \
						<div class="form-group p-xxs"> \
							<div class="row vertical-align-top-a1ta"> \
								<div class="col-md-3"> \
									<label class="col-md-12 control-label text-right">VAS-Billing Typ:</label> \
								</div> \
								<div class="col-md-8"> \
									<div class="col-md-5"> \
										<div class="checkbox checkbox-success checkbox-inline"> \
											<input type="checkbox" id="inlineCheckboxVasWapBilling" name="inlineCheckboxSmsSend" value="option1" checked=""> \
											<label for="inlineCheckbox1"> VAS-WAP-Billing </label> \
										</div> \
									</div> \
									<div class="col-md-5"> \
										<div class="checkbox checkbox-success checkbox-inline"> \
											<input type="checkbox" id="inlineCheckboxVasSmsHandshakeBilling" name="inlineCheckboxSmsReceive" value="option1"> \
											<label for="inlineCheckbox2"> VAS-Billing SMS Handshake </label> \
										</div> \
									</div> \
								</div> \
								<div class="col-md-1"> \
									<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="Todo" data-content="xxxxxxx">?</button> \
								</div> \
							</div> \
						</div> \
						<div class="form-group p-xxs"> \
							<div class="row vertical-align-top-a1ta"> \
								<div class="col-md-3 margin-top-a1ta"> \
									<label class="col-md-12 control-label text-right">Merchant ID(s):</label> \
								</div> \
								<div class="col-md-8"> \
									<div class="col-md-12"> \
										<textarea class="form-control vresize" rows="1" id="kdb_address"></textarea> \
									</div> \
								</div> \
								<div class="col-md-1"> \
									<button type="button" class="btn btn-info btn-xs btn-outline" data-container="body" data-toggle="popover" data-placement="top" data-title="IP-Adresse(n), Application Host(s)" data-content="Todo: do muas ma de IP-Adressen oder de Hostnomen eitrogn! Vastehst?">?</button> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div>');
		} else {
			//remove VAS-Billing Box
			var box_id = $(this).attr("id");   
			//$('#rowNewMsisdn'+box_id+'').remove();  
	   
			$('#dynamicFieldVasBillingBox'+billingInformationRowCount+'').remove();  
		}
	});
	// --------------------- Billing Information ----------------------
	
	


//############################################################################################################################################
//#
//# whatever
//#
//############################################################################################################################################

	$('#datepicker').datepicker();
	$("#datepicker").on("changeDate", function(event) {
		$("#my_hidden_input").val(
				$("#datepicker").datepicker('getFormattedDate')
		)
	});

	$('#datepickerDatumAntrag').datepicker();
	$('#datepickerDatumEinrichtungSoll').datepicker();
	$('#datepickerDatumEinrichtungIst').datepicker();

	$('#datepicker .input-group.date').datepicker({ });
	$('#datepicker .input-daterange').datepicker({ });

	$("#demo1").TouchSpin({
		min: 0,
		max: 100,
		step: 0.1,
		decimals: 2,
		boostat: 5,
		maxboostedstep: 10,
	});

	$("#demo2").TouchSpin({
		verticalbuttons: true
	});

	$("#demo3").TouchSpin({
		postfix: '%'
	});

	$("#demo4").TouchSpin({
		postfix: "a button",
		postfix_extraclass: "btn btn-default"
	});

	$(".js-source-states").select2();
	$(".js-source-states-2").select2();

	//turn to inline mode
	$.fn.editable.defaults.mode = 'inline';

	//defaults
	$.fn.editable.defaults.url = '#';

	//editables
	$('#username').editable({
		url: '#',
		type: 'text',
		pk: 1,
		name: 'username',
		title: 'Enter username'
	});

	$('#firstname').editable({
		validate: function(value) {
			if($.trim(value) == '') return 'This field is required';
		}
	});

	$('#sex').editable({
		prepend: "not selected",
		source: [
			{value: 1, text: 'Male'},
			{value: 2, text: 'Female'}
		],
		display: function(value, sourceData) {
			var colors = {"": "gray", 1: "green", 2: "blue"},
					elem = $.grep(sourceData, function(o){return o.value == value;});

			if(elem.length) {
				$(this).text(elem[0].text).css("color", colors[value]);
			} else {
				$(this).empty();
			}
		}
	});

	$('#dob').editable();

	$('#event').editable({
		placement: 'right',
		combodate: {
			firstItem: 'name'
		}
	});

	$('#comments').editable({
		showbuttons: 'bottom'
	});

	$('#fruits').editable({
		pk: 1,
		limit: 3,
		source: [
			{value: 1, text: 'banana'},
			{value: 2, text: 'peach'},
			{value: 3, text: 'apple'},
			{value: 4, text: 'watermelon'},
			{value: 5, text: 'orange'}
		]
	});

	$('#user .editable').on('hidden', function(e, reason){
		if(reason === 'save' || reason === 'nochange') {
			var $next = $(this).closest('tr').next().find('.editable');
			if($('#autoopen').is(':checked')) {
				setTimeout(function() {
					$next.editable('show');
				}, 300);
			} else {
				$next.focus();
			}
		}
	});

	// ClockPicker
	$('.clockpicker').clockpicker({autoclose: true});

	// DateTimePicker
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker3').datetimepicker();	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//$("#form").submit(function() {
		//console.log("form::submit()");
		
		// $.post("testAjaxPost.php", $("#form").serialize(), function(data) {
			// alert(data);
			
			// return false;
		// });
		
		// var errors = validator.numberOfInvalids();
		// if (errors) {
			// console.log("form.validate::errors");
		// } else {
			// console.log("form.validate::NO.errors");
			// // $.post("testAjaxPost.php", $("#form").serialize(), function(data) {
				// // alert(data);
				// // return false;
			// // });
		// }	
	//});
	
	
});
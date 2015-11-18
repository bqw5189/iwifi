/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.services', [])

.factory('Chats', function() {
  
  var source = {"code": 0, "message": "查询成功", "data": {"attendanceRecords": [
      {"id": 61, "json": null, "tag1": null, "tag2": null, "employeeId": 18, "departmentId": 2, "date": 1447689600000, "dateDisplay": "2015-11-17", "normalLoginTime": 3600000, "normalLogoutTime": 36000000, "loginTime": 38533000, "loginTimeDisplay": "18:42:13", "loginStatus": "1", "loginExceptionDesc": null, "logoutTime": 39828000, "logoutTimeDisplay": "19:03:48", "logoutStatus": "0", "logoutExceptionDesc": null, "status": "1", "employeeAppUid": "zhangteng", "employeeEmail": "zhangteng@ruijie.com.cn", "employeePhone": "13301289772", "employeeName": "张腾", "departmentName": "RIIL事业部", "startDate": null, "endDate": null},
      {"id": 61, "json": null, "tag1": null, "tag2": null, "employeeId": 18, "departmentId": 2, "date": 1447689600000, "dateDisplay": "2015-11-16", "normalLoginTime": 3600000, "normalLogoutTime": 36000000, "loginTime": 38533000, "loginTimeDisplay": "10:00:13", "loginStatus": "1", "loginExceptionDesc": null, "logoutTime": 39828000, "logoutTimeDisplay": "19:03:48", "logoutStatus": "0", "logoutExceptionDesc": null, "status": "1", "employeeAppUid": "zhangteng", "employeeEmail": "zhangteng@ruijie.com.cn", "employeePhone": "13301289772", "employeeName": "张腾", "departmentName": "RIIL事业部", "startDate": null, "endDate": null},
      {"id": 61, "json": null, "tag1": null, "tag2": null, "employeeId": 18, "departmentId": 2, "date": 1447689600000, "dateDisplay": "2015-11-15", "normalLoginTime": 3600000, "normalLogoutTime": 36000000, "loginTime": 38533000, "loginTimeDisplay": "8:00:13", "loginStatus": "1", "loginExceptionDesc": null, "logoutTime": 39828000, "logoutTimeDisplay": "18:03:48", "logoutStatus": "0", "logoutExceptionDesc": null, "status": "1", "employeeAppUid": "zhangteng", "employeeEmail": "zhangteng@ruijie.com.cn", "employeePhone": "13301289772", "employeeName": "张腾", "departmentName": "RIIL事业部", "startDate": null, "endDate": null},
      {"id": 61, "json": null, "tag1": null, "tag2": null, "employeeId": 18, "departmentId": 2, "date": 1447689600000, "dateDisplay": "2015-11-15", "normalLoginTime": 3600000, "normalLogoutTime": 36000000, "loginTime": 38533000, "loginTimeDisplay": "10:00:13", "loginStatus": "1", "loginExceptionDesc": null, "logoutTime": 39828000, "logoutTimeDisplay": "17:03:48", "logoutStatus": "0", "logoutExceptionDesc": null, "status": "1", "employeeAppUid": "zhangteng", "employeeEmail": "zhangteng@ruijie.com.cn", "employeePhone": "13301289772", "employeeName": "张腾", "departmentName": "RIIL事业部", "startDate": null, "endDate": null},
  ]}};
  
  var chartObject = {
            
            defaultValue : function(index){
                return  {
                    x: index,
                    val_0: 0,
                    val_1: 0,
                    val_2: 0,
                    val_3: 0
                }
            },
            newValue : function(index, v0, v1, v2,v3){
                return {
                    x: index,
                    val_0: v0,
                    val_1: v1,
                    val_2: v2,
                    val_3: v3
                }
            }
        };
        
  return {
    attendanceRecordsCharts: function() {
        var chats = [];
        for (var i = 1; i < 31; i++){
            var aRecord = null;
            console.debug(i);
            for (var j = 0; j <  source.data.attendanceRecords.length; j++){
                var attendanceRecord = source.data.attendanceRecords[j];
                var dateStr = attendanceRecord.dateDisplay.split("-");
                
                if (dateStr[2] === i+""){
                    var signinTimes = attendanceRecord.loginTimeDisplay.split(":");
                    var signoutTime = attendanceRecord.logoutTimeDisplay.split(":");

                    var signinHour = parseInt(signinTimes[0]);
                    var signoutHour = parseInt(signoutTime[0]);

                    if (signoutHour - signinHour>=9){
                        aRecord = chartObject.newValue(i, signinHour, 0, signoutHour-signinHour,0);
                    }else{
                        if (signinHour >= 9){
                            if (signoutHour<=18) {
                                aRecord = chartObject.newValue(i, 9, signinHour - 9, signoutHour - signinHour, 18-signoutHour);
                            }else{
                                aRecord = chartObject.newValue(i, 9, signinHour - 9, signoutHour - signinHour, 0);
                            }
                        }else{
                            if (signoutHour<=18){
                                aRecord = chartObject.newValue(i, signinHour, 0, signoutHour-signinHour,18-signoutHour);
                            }else{
                                aRecord = chartObject.newValue(i, signinHour, 0, signoutHour-signinHour,0);
                            }
                        }

                    }
                } 
            }
            if (null !== aRecord){
                chats.push(aRecord);
            }else{
                chats.push(chartObject.defaultValue(i));
            }
            
            
        }
      return chats;
    }
  };
});



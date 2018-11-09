app.directive('birthDayPicker', function () {
    return {
        restrict: 'A',
        replace: true,
        required: 'birthday',
        scope: {
            birthday: "=",
            onChange: '&',
        },
        templateUrl: 'js/template/birthday-directive.html',
        link: function (scope, elm, attrs) {
            scope.days =[];
            scope.years = [
                1923,1924,1925,1926,1927,1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,
                1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,
                1957,1958,1959,1960,1961,1662,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,
                1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,
                1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,
                2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];
            scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
            scope.selectedDay={};


            scope.birthdayChange=function(){
                if (scope.birthday == null) {
                    scope.birthYear = new Date().getFullYear();
                    scope.birthMonth = new Date().getMonth()+1;
                    generateDaySelection(scope.birthYear,scope.birthMonth);
                    scope.birthDay = new Date().getDate();
                } else {
                    var BirthDate = new Date(scope.birthday);
                    scope.birthYear = BirthDate.getFullYear();
                    scope.birthMonth = BirthDate.getMonth() + 1;
                    generateDaySelection(scope.birthYear,scope.birthMonth);
                    scope.birthDay = BirthDate.getDate();
                }
            }
            scope.birthdayChange();
            scope.$watch('birthday',function(newVal,oldVal){  if(newVal!=oldVal){
                scope.birthday=newVal;
                scope.birthdayChange();
            }  },true);



            scope.birthpickerchanged = function () {
                birthYear = scope.birthYear;
                birthMonth = scope.birthMonth;
                generateDaySelection(scope.birthYear,scope.birthMonth);
                if(scope.days.length<scope.birthDay){
                    birthDay = scope.days.length;
                    scope.birthDay = scope.days.length;
                }else{
                    birthDay = scope.birthDay;
                }
                var BirthDate = new Date(scope.birthYear, scope.birthMonth - 1, scope.birthDay, 0, 0, 0)
                scope.birthday = BirthDate;
                //scope.onChange({ data: scope.birthday })
            }
            scope.birthpickerchanged();

            function generateDaySelection(year,month){
                month-=1;
                var days = (new Date(year, month + 1, 1) - new Date(year, month, 1))/(1000 * 60 * 60 * 24);
                scope.days =[];
                for(i =1;i<days+1;i++){
                    scope.days.push(i);
                }

            }
        }

    };
});
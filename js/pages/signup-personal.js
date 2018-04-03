
Zepto(function($){
    var renderFormMenu = function() {
        var result = [
            {
                id: 'phone_picker',
                title: '国际区号',
                value: ['中国+86','美国+1'],
            },
            {
                id: 'identity_picker',
                title: '证件号类别',
                value: ['身份证','护照'],
            },
            {
                id: 'date_picker',
                title: '出生日期',
                value: [2015,2016,2017,2018],
            },
            {
                id: 'study_picker',
                title: '学历',
                value: ['博士','研究生','本科','专科','高中'],
            },
            {
                id: 'academic_picker',
                title: '职称',
                value: ['A','B','C','D','E'],
            },
            {
                id: 'academic2_picker',
                title: '职称',
                value: ['A','B','C','D','E'],
            }

        ]

        $.each(result, function(index,item){
            renderPicker(item)
        })
    }
    renderFormMenu();
    // 首页幻灯片  
});


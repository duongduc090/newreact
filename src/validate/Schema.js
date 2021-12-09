import * as yup from "yup";

export const schemaContact = yup.object().shape({
    name: yup.string()
        .matches(/^[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zA-Z 0-9]*$/,
            'This field is not in the correct format')
        .required('This field is required')
        .min(3, 'Name must have min 3 characters')
        .max(30, 'Name have max 30 characters')
        .trim(),
    // lastName: yup.string()
    //     .matches(/^[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zA-Z 0-9]*$/,
    //         'This field is not in the correct format')
    //     .required('This field is required')
    //     .min(3, 'Name must have min 3 characters')
    //     .max(30, 'Name have max 30 characters')
    //     .trim(),
    title: yup.string()
        .matches(/^[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zA-Z 0-9]*$/,
            'This field is not in the correct format')
        .required('This field is required')
        .trim(),
    phone: yup.string()
        .required('This field is required')
        .matches(/^[0](32|33|34|35|36|37|38|39|56|58|59|70|76|77|78|79|81|82|83|84|85|86|88|89|90|91|92|93|94|96|97|98|99)+[-\s]?\d{3}[-\s]?\d{4}/, 'Phone Number is not in the correct format')
        .trim(),
    email: yup.string().email('This field is not in the correct format').required('This field is required'),
    message: yup.string().required('This field is required').min(10, 'Message must have min 10 characters').max(300, 'Message have max 300 characters'),
})
export const schemaSignup = yup.object().shape({
    name: yup.string()
    .matches(/^[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zA-Z 0-9]*$/,
        'This field is not in the correct format')
    .required('This field is required')
    .min(3, 'Name must have min 3 characters')
    .max(30, 'Name have max 30 characters')
    .trim(),
    phone: yup.string()
    .required('This field is required')
    .matches(/^[0](32|33|34|35|36|37|38|39|56|58|59|70|76|77|78|79|81|82|83|84|85|86|88|89|90|91|92|93|94|96|97|98|99)+[-\s]?\d{3}[-\s]?\d{4}/, 'Phone Number is not in the correct format')
    .trim(),
    email: yup.string().email('This field is not in the correct format').required('This field is required'),
    password: yup.string().required("This field is required").min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})
export const schemaSignin = yup.object().shape({
    email: yup.string().email('This field is not in the correct format').required('This field is required'),
    password: yup.string().required("This field is required").min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
})

export const schemaCategory = yup.object().shape({
    name: yup.string()
        .matches(/^[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zA-Z 0-9]*$/,
            'This field is is not in the correct format')
        .required('This field is required')
        .min(3, 'Name must have min 3 characters')
        .max(30, 'Name have max 30 characters')
        .trim()
})
export const schemaProduct = yup.object().shape({
    name: yup.string()
        .matches(/^[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐa-zA-Z 0-9]*$/,
            'This field is is not in the correct format')
        .required('This field is required')
        .min(3, 'Name must have min 3 characters')
        .max(30, 'Name have max 30 characters')
        .trim(),
    price: yup.string()
        .matches(/^[0-9]*$/,
            'This field is is not in the correct format')
        .required('This field is required')
        .min(0, 'Price must be more than 0')
        .max(100000000, 'Price must be less than $100.000.000')
        .trim(),
    quantity: yup.string()
        .matches(/^[0-9]*$/,
            'This field is is not in the correct format')
        .required('This field is required')
        .max(10000, 'Quantity must be less than $10.000')
        .trim(),
    description: yup.string()
        .required('This field is required')
        .min(10, 'Description must have min 10 characters')
        .max(300, 'Description have max 300 characters')
        .trim(),
    // photo: yup.mixed().required("Choose 1 photo (jpg)")
    //         .test("fileSize", "The file is to large", (value) => {
    //             return value && value[0].size <= 2000000
    //         })
    //         .test("type", "Only support jpeg", (value) => {
    //             return value && value[0].type === 'image/jpg'
    //         })
})
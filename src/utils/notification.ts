import { notification } from 'antd';


export const alert = (desc: string, type: string = "success") => {
    if (type === "success") {
        notification.open({
            message: 'Success!',
            description: desc,
            placement: "bottomRight"
        });
    } else {
        notification.error({
            message: 'Error!',
            description: desc,
            placement: "bottomRight"
        });
    }
}
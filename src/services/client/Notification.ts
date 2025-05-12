import { notifications } from "@mantine/notifications"

class Notification {

    public static Information = (message: string, title?: string) => {
        notifications.show({
            color: 'primary',
            title: title || "",
            message: message
          })
    }

    public static Success = (message: string, title?: string) => {
        notifications.show({
            color: 'success',
            title: title || "",
            message: message
          })
    }

    public static Error = (message: string, title?: string) => {
        notifications.show({
            color: 'error',
            title: title || "",
            message: message
          })
    }

}

export default Notification;
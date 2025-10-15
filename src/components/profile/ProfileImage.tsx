import { Button, Form, message, Modal } from "antd";
import { useAppStore } from "../../stores/store";
import { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import Dragger from "antd/es/upload/Dragger";
import { useClientAvatarMutation } from "../../hooks/useClientApi";

interface Props {
  src: string;
  name: string;
}

const ProfileImage = ({ src, name }: Props) => {
  const language = useAppStore((state) => state.language);
  const setUser = useAppStore((state) => state.setUser);

  // states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<any[]>([]);

  // mutation
  const { mutate, isPending } = useClientAvatarMutation();

  // handle upload change
  const handleFileChange = (info: any) => {
    const newFileList = info.fileList.slice(-1); // only one file
    setFileList(newFileList);
  };

  // submit
  const handleChangeAvatar = () => {
    if (fileList.length === 0) {
      message.error(language === "tm" ? "Faýl saýlanmady" : "Файл не выбран");
      return;
    }

    const file = fileList[0].originFileObj;
    const fileName = fileList[0].name; // Get the original file name with extension

    const formData = new FormData();
    // 💡 FIX APPLIED HERE: Pass the filename as the third argument.
    // This ensures the server sees the file extension (e.g., .jpg, .png)
    formData.append("image", file, fileName);

    mutate(formData, {
      onSuccess: (res) => {
        message.success(
          language === "tm"
            ? "Surat üstünlikli üýtgedildi!"
            : "Аватар успешно обновлён!"
        );
        setIsModalOpen(false);
        setFileList([]);
        setUser(res.user);
      },
      onError: (err: any) => {
        // You might want to display the specific error message from the server if available
        const errorMessage =
          err?.response?.data?.errors?.image?.[0] ||
          (language === "tm" ? "Ýalňyşlyk ýüze çykdy!" : "Произошла ошибка!");
        message.error(errorMessage);
        console.error(err);
      },
    });
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="size-16 rounded-md overflow-hidden cursor-pointer"
      >
        <img src={src} alt={name} className="size-full object-cover" />
      </div>

      <Modal
        title={language === "tm" ? "Surat çalyşmak" : "Замена аватара"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        centered
      >
        <Form
          layout="vertical"
          className="flex flex-col gap-4"
          onFinish={handleChangeAvatar}
        >
          <Dragger
            name="image"
            multiple={false}
            fileList={fileList}
            beforeUpload={() => false} // prevent auto upload
            onChange={handleFileChange}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              {language === "tm"
                ? "Faýly süýräň ýa-da saýlaň"
                : "Перетащите или выберите файл для загрузки"}
            </p>
          </Dragger>

          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            disabled={fileList.length === 0}
            className="mt-4"
          >
            {language === "tm" ? "Iber" : "Отправить"}
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ProfileImage;

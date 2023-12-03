import GpuPic from "../imgs/graphics-card.png";
import CpuPic from "../imgs/cpu-tower.png";
import RamPic from "../imgs/ram.png";
import UsbPic from "../imgs/usb-drive.png";
import HddPic from "../imgs/hard-disk.png";
import SsdPic from "../imgs/ssd-drive.png";

export const parts = [
  { name: "GPU", png: GpuPic },
  { name: "CPU", png: CpuPic },
  { name: "RAM", png: RamPic },
  { name: "HDD", png: HddPic },
  { name: "SSD", png: SsdPic },
  { name: "USB", png: UsbPic },
];



export const SEARCH_TYPE = {
    GET_ALL: 'GET_ALL',
}
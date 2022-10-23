import IconDriveFolderUploadFill0Wght100Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght100Grad0Opsz48'
import IconDriveFolderUploadFill0Wght200Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght200Grad0Opsz48'
import IconDriveFolderUploadFill0Wght300Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght300Grad0Opsz48'
import IconDriveFolderUploadFill0Wght400Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght400Grad0Opsz48'
import IconDriveFolderUploadFill0Wght500Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght500Grad0Opsz48'
import IconDriveFolderUploadFill0Wght600Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght600Grad0Opsz48'
import IconDriveFolderUploadFill0Wght700Grad0Opsz48 from '../components/DriveFolderUploadFill0Wght700Grad0Opsz48'
import IconDriveFolderUploadFill1Wght100Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght100Grad0Opsz48'
import IconDriveFolderUploadFill1Wght200Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght200Grad0Opsz48'
import IconDriveFolderUploadFill1Wght300Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght300Grad0Opsz48'
import IconDriveFolderUploadFill1Wght400Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght400Grad0Opsz48'
import IconDriveFolderUploadFill1Wght500Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght500Grad0Opsz48'
import IconDriveFolderUploadFill1Wght600Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght600Grad0Opsz48'
import IconDriveFolderUploadFill1Wght700Grad0Opsz48 from '../components/DriveFolderUploadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconDriveFolderUpload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconDriveFolderUploadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconDriveFolderUploadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconDriveFolderUploadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconDriveFolderUploadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconDriveFolderUploadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconDriveFolderUploadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconDriveFolderUploadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconDriveFolderUploadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconDriveFolderUploadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconDriveFolderUploadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconDriveFolderUploadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconDriveFolderUploadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconDriveFolderUploadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconDriveFolderUploadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

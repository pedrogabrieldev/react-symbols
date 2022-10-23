import IconCloudUploadFill0Wght100Grad0Opsz48 from '../components/CloudUploadFill0Wght100Grad0Opsz48'
import IconCloudUploadFill0Wght200Grad0Opsz48 from '../components/CloudUploadFill0Wght200Grad0Opsz48'
import IconCloudUploadFill0Wght300Grad0Opsz48 from '../components/CloudUploadFill0Wght300Grad0Opsz48'
import IconCloudUploadFill0Wght400Grad0Opsz48 from '../components/CloudUploadFill0Wght400Grad0Opsz48'
import IconCloudUploadFill0Wght500Grad0Opsz48 from '../components/CloudUploadFill0Wght500Grad0Opsz48'
import IconCloudUploadFill0Wght600Grad0Opsz48 from '../components/CloudUploadFill0Wght600Grad0Opsz48'
import IconCloudUploadFill0Wght700Grad0Opsz48 from '../components/CloudUploadFill0Wght700Grad0Opsz48'
import IconCloudUploadFill1Wght100Grad0Opsz48 from '../components/CloudUploadFill1Wght100Grad0Opsz48'
import IconCloudUploadFill1Wght200Grad0Opsz48 from '../components/CloudUploadFill1Wght200Grad0Opsz48'
import IconCloudUploadFill1Wght300Grad0Opsz48 from '../components/CloudUploadFill1Wght300Grad0Opsz48'
import IconCloudUploadFill1Wght400Grad0Opsz48 from '../components/CloudUploadFill1Wght400Grad0Opsz48'
import IconCloudUploadFill1Wght500Grad0Opsz48 from '../components/CloudUploadFill1Wght500Grad0Opsz48'
import IconCloudUploadFill1Wght600Grad0Opsz48 from '../components/CloudUploadFill1Wght600Grad0Opsz48'
import IconCloudUploadFill1Wght700Grad0Opsz48 from '../components/CloudUploadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconCloudUpload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconCloudUploadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconCloudUploadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconCloudUploadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconCloudUploadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconCloudUploadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconCloudUploadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconCloudUploadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconCloudUploadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconCloudUploadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconCloudUploadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconCloudUploadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconCloudUploadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconCloudUploadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconCloudUploadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

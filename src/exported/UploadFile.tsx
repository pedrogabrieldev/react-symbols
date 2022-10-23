import IconUploadFileFill0Wght100Grad0Opsz48 from '../components/UploadFileFill0Wght100Grad0Opsz48'
import IconUploadFileFill0Wght200Grad0Opsz48 from '../components/UploadFileFill0Wght200Grad0Opsz48'
import IconUploadFileFill0Wght300Grad0Opsz48 from '../components/UploadFileFill0Wght300Grad0Opsz48'
import IconUploadFileFill0Wght400Grad0Opsz48 from '../components/UploadFileFill0Wght400Grad0Opsz48'
import IconUploadFileFill0Wght500Grad0Opsz48 from '../components/UploadFileFill0Wght500Grad0Opsz48'
import IconUploadFileFill0Wght600Grad0Opsz48 from '../components/UploadFileFill0Wght600Grad0Opsz48'
import IconUploadFileFill0Wght700Grad0Opsz48 from '../components/UploadFileFill0Wght700Grad0Opsz48'
import IconUploadFileFill1Wght100Grad0Opsz48 from '../components/UploadFileFill1Wght100Grad0Opsz48'
import IconUploadFileFill1Wght200Grad0Opsz48 from '../components/UploadFileFill1Wght200Grad0Opsz48'
import IconUploadFileFill1Wght300Grad0Opsz48 from '../components/UploadFileFill1Wght300Grad0Opsz48'
import IconUploadFileFill1Wght400Grad0Opsz48 from '../components/UploadFileFill1Wght400Grad0Opsz48'
import IconUploadFileFill1Wght500Grad0Opsz48 from '../components/UploadFileFill1Wght500Grad0Opsz48'
import IconUploadFileFill1Wght600Grad0Opsz48 from '../components/UploadFileFill1Wght600Grad0Opsz48'
import IconUploadFileFill1Wght700Grad0Opsz48 from '../components/UploadFileFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUploadFile = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUploadFileFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUploadFileFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUploadFileFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUploadFileFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUploadFileFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUploadFileFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUploadFileFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUploadFileFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUploadFileFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUploadFileFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUploadFileFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUploadFileFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUploadFileFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUploadFileFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

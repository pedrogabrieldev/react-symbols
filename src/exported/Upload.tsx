import IconUploadFill0Wght100Grad0Opsz48 from '../components/UploadFill0Wght100Grad0Opsz48'
import IconUploadFill0Wght200Grad0Opsz48 from '../components/UploadFill0Wght200Grad0Opsz48'
import IconUploadFill0Wght300Grad0Opsz48 from '../components/UploadFill0Wght300Grad0Opsz48'
import IconUploadFill0Wght400Grad0Opsz48 from '../components/UploadFill0Wght400Grad0Opsz48'
import IconUploadFill0Wght500Grad0Opsz48 from '../components/UploadFill0Wght500Grad0Opsz48'
import IconUploadFill0Wght600Grad0Opsz48 from '../components/UploadFill0Wght600Grad0Opsz48'
import IconUploadFill0Wght700Grad0Opsz48 from '../components/UploadFill0Wght700Grad0Opsz48'
import IconUploadFill1Wght100Grad0Opsz48 from '../components/UploadFill1Wght100Grad0Opsz48'
import IconUploadFill1Wght200Grad0Opsz48 from '../components/UploadFill1Wght200Grad0Opsz48'
import IconUploadFill1Wght300Grad0Opsz48 from '../components/UploadFill1Wght300Grad0Opsz48'
import IconUploadFill1Wght400Grad0Opsz48 from '../components/UploadFill1Wght400Grad0Opsz48'
import IconUploadFill1Wght500Grad0Opsz48 from '../components/UploadFill1Wght500Grad0Opsz48'
import IconUploadFill1Wght600Grad0Opsz48 from '../components/UploadFill1Wght600Grad0Opsz48'
import IconUploadFill1Wght700Grad0Opsz48 from '../components/UploadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconUpload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconUploadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconUploadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconUploadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconUploadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconUploadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconUploadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconUploadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconUploadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconUploadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconUploadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconUploadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconUploadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconUploadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconUploadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

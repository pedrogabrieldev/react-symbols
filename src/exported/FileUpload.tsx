import IconFileUploadFill0Wght100Grad0Opsz48 from '../components/FileUploadFill0Wght100Grad0Opsz48'
import IconFileUploadFill0Wght200Grad0Opsz48 from '../components/FileUploadFill0Wght200Grad0Opsz48'
import IconFileUploadFill0Wght300Grad0Opsz48 from '../components/FileUploadFill0Wght300Grad0Opsz48'
import IconFileUploadFill0Wght400Grad0Opsz48 from '../components/FileUploadFill0Wght400Grad0Opsz48'
import IconFileUploadFill0Wght500Grad0Opsz48 from '../components/FileUploadFill0Wght500Grad0Opsz48'
import IconFileUploadFill0Wght600Grad0Opsz48 from '../components/FileUploadFill0Wght600Grad0Opsz48'
import IconFileUploadFill0Wght700Grad0Opsz48 from '../components/FileUploadFill0Wght700Grad0Opsz48'
import IconFileUploadFill1Wght100Grad0Opsz48 from '../components/FileUploadFill1Wght100Grad0Opsz48'
import IconFileUploadFill1Wght200Grad0Opsz48 from '../components/FileUploadFill1Wght200Grad0Opsz48'
import IconFileUploadFill1Wght300Grad0Opsz48 from '../components/FileUploadFill1Wght300Grad0Opsz48'
import IconFileUploadFill1Wght400Grad0Opsz48 from '../components/FileUploadFill1Wght400Grad0Opsz48'
import IconFileUploadFill1Wght500Grad0Opsz48 from '../components/FileUploadFill1Wght500Grad0Opsz48'
import IconFileUploadFill1Wght600Grad0Opsz48 from '../components/FileUploadFill1Wght600Grad0Opsz48'
import IconFileUploadFill1Wght700Grad0Opsz48 from '../components/FileUploadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileUpload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileUploadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileUploadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileUploadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileUploadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileUploadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileUploadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileUploadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileUploadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileUploadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileUploadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileUploadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileUploadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileUploadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileUploadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

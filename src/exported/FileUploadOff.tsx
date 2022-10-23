import IconFileUploadOffFill0Wght100Grad0Opsz48 from '../components/FileUploadOffFill0Wght100Grad0Opsz48'
import IconFileUploadOffFill0Wght200Grad0Opsz48 from '../components/FileUploadOffFill0Wght200Grad0Opsz48'
import IconFileUploadOffFill0Wght300Grad0Opsz48 from '../components/FileUploadOffFill0Wght300Grad0Opsz48'
import IconFileUploadOffFill0Wght400Grad0Opsz48 from '../components/FileUploadOffFill0Wght400Grad0Opsz48'
import IconFileUploadOffFill0Wght500Grad0Opsz48 from '../components/FileUploadOffFill0Wght500Grad0Opsz48'
import IconFileUploadOffFill0Wght600Grad0Opsz48 from '../components/FileUploadOffFill0Wght600Grad0Opsz48'
import IconFileUploadOffFill0Wght700Grad0Opsz48 from '../components/FileUploadOffFill0Wght700Grad0Opsz48'
import IconFileUploadOffFill1Wght100Grad0Opsz48 from '../components/FileUploadOffFill1Wght100Grad0Opsz48'
import IconFileUploadOffFill1Wght200Grad0Opsz48 from '../components/FileUploadOffFill1Wght200Grad0Opsz48'
import IconFileUploadOffFill1Wght300Grad0Opsz48 from '../components/FileUploadOffFill1Wght300Grad0Opsz48'
import IconFileUploadOffFill1Wght400Grad0Opsz48 from '../components/FileUploadOffFill1Wght400Grad0Opsz48'
import IconFileUploadOffFill1Wght500Grad0Opsz48 from '../components/FileUploadOffFill1Wght500Grad0Opsz48'
import IconFileUploadOffFill1Wght600Grad0Opsz48 from '../components/FileUploadOffFill1Wght600Grad0Opsz48'
import IconFileUploadOffFill1Wght700Grad0Opsz48 from '../components/FileUploadOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileUploadOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileUploadOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileUploadOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileUploadOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileUploadOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileUploadOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileUploadOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileUploadOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileUploadOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileUploadOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileUploadOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileUploadOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileUploadOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileUploadOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileUploadOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

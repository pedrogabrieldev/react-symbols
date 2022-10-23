import IconFilePresentFill0Wght100Grad0Opsz48 from '../components/FilePresentFill0Wght100Grad0Opsz48'
import IconFilePresentFill0Wght200Grad0Opsz48 from '../components/FilePresentFill0Wght200Grad0Opsz48'
import IconFilePresentFill0Wght300Grad0Opsz48 from '../components/FilePresentFill0Wght300Grad0Opsz48'
import IconFilePresentFill0Wght400Grad0Opsz48 from '../components/FilePresentFill0Wght400Grad0Opsz48'
import IconFilePresentFill0Wght500Grad0Opsz48 from '../components/FilePresentFill0Wght500Grad0Opsz48'
import IconFilePresentFill0Wght600Grad0Opsz48 from '../components/FilePresentFill0Wght600Grad0Opsz48'
import IconFilePresentFill0Wght700Grad0Opsz48 from '../components/FilePresentFill0Wght700Grad0Opsz48'
import IconFilePresentFill1Wght100Grad0Opsz48 from '../components/FilePresentFill1Wght100Grad0Opsz48'
import IconFilePresentFill1Wght200Grad0Opsz48 from '../components/FilePresentFill1Wght200Grad0Opsz48'
import IconFilePresentFill1Wght300Grad0Opsz48 from '../components/FilePresentFill1Wght300Grad0Opsz48'
import IconFilePresentFill1Wght400Grad0Opsz48 from '../components/FilePresentFill1Wght400Grad0Opsz48'
import IconFilePresentFill1Wght500Grad0Opsz48 from '../components/FilePresentFill1Wght500Grad0Opsz48'
import IconFilePresentFill1Wght600Grad0Opsz48 from '../components/FilePresentFill1Wght600Grad0Opsz48'
import IconFilePresentFill1Wght700Grad0Opsz48 from '../components/FilePresentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFilePresent = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFilePresentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFilePresentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFilePresentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFilePresentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFilePresentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFilePresentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFilePresentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFilePresentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFilePresentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFilePresentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFilePresentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFilePresentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFilePresentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFilePresentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

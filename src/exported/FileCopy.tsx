import IconFileCopyFill0Wght100Grad0Opsz48 from '../components/FileCopyFill0Wght100Grad0Opsz48'
import IconFileCopyFill0Wght200Grad0Opsz48 from '../components/FileCopyFill0Wght200Grad0Opsz48'
import IconFileCopyFill0Wght300Grad0Opsz48 from '../components/FileCopyFill0Wght300Grad0Opsz48'
import IconFileCopyFill0Wght400Grad0Opsz48 from '../components/FileCopyFill0Wght400Grad0Opsz48'
import IconFileCopyFill0Wght500Grad0Opsz48 from '../components/FileCopyFill0Wght500Grad0Opsz48'
import IconFileCopyFill0Wght600Grad0Opsz48 from '../components/FileCopyFill0Wght600Grad0Opsz48'
import IconFileCopyFill0Wght700Grad0Opsz48 from '../components/FileCopyFill0Wght700Grad0Opsz48'
import IconFileCopyFill1Wght100Grad0Opsz48 from '../components/FileCopyFill1Wght100Grad0Opsz48'
import IconFileCopyFill1Wght200Grad0Opsz48 from '../components/FileCopyFill1Wght200Grad0Opsz48'
import IconFileCopyFill1Wght300Grad0Opsz48 from '../components/FileCopyFill1Wght300Grad0Opsz48'
import IconFileCopyFill1Wght400Grad0Opsz48 from '../components/FileCopyFill1Wght400Grad0Opsz48'
import IconFileCopyFill1Wght500Grad0Opsz48 from '../components/FileCopyFill1Wght500Grad0Opsz48'
import IconFileCopyFill1Wght600Grad0Opsz48 from '../components/FileCopyFill1Wght600Grad0Opsz48'
import IconFileCopyFill1Wght700Grad0Opsz48 from '../components/FileCopyFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFileCopy = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFileCopyFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFileCopyFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFileCopyFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFileCopyFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFileCopyFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFileCopyFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFileCopyFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFileCopyFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFileCopyFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFileCopyFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFileCopyFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFileCopyFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFileCopyFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFileCopyFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

import IconFontDownloadFill0Wght100Grad0Opsz48 from '../components/FontDownloadFill0Wght100Grad0Opsz48'
import IconFontDownloadFill0Wght200Grad0Opsz48 from '../components/FontDownloadFill0Wght200Grad0Opsz48'
import IconFontDownloadFill0Wght300Grad0Opsz48 from '../components/FontDownloadFill0Wght300Grad0Opsz48'
import IconFontDownloadFill0Wght400Grad0Opsz48 from '../components/FontDownloadFill0Wght400Grad0Opsz48'
import IconFontDownloadFill0Wght500Grad0Opsz48 from '../components/FontDownloadFill0Wght500Grad0Opsz48'
import IconFontDownloadFill0Wght600Grad0Opsz48 from '../components/FontDownloadFill0Wght600Grad0Opsz48'
import IconFontDownloadFill0Wght700Grad0Opsz48 from '../components/FontDownloadFill0Wght700Grad0Opsz48'
import IconFontDownloadFill1Wght100Grad0Opsz48 from '../components/FontDownloadFill1Wght100Grad0Opsz48'
import IconFontDownloadFill1Wght200Grad0Opsz48 from '../components/FontDownloadFill1Wght200Grad0Opsz48'
import IconFontDownloadFill1Wght300Grad0Opsz48 from '../components/FontDownloadFill1Wght300Grad0Opsz48'
import IconFontDownloadFill1Wght400Grad0Opsz48 from '../components/FontDownloadFill1Wght400Grad0Opsz48'
import IconFontDownloadFill1Wght500Grad0Opsz48 from '../components/FontDownloadFill1Wght500Grad0Opsz48'
import IconFontDownloadFill1Wght600Grad0Opsz48 from '../components/FontDownloadFill1Wght600Grad0Opsz48'
import IconFontDownloadFill1Wght700Grad0Opsz48 from '../components/FontDownloadFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFontDownload = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFontDownloadFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFontDownloadFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFontDownloadFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFontDownloadFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFontDownloadFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFontDownloadFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFontDownloadFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFontDownloadFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFontDownloadFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFontDownloadFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFontDownloadFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFontDownloadFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFontDownloadFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFontDownloadFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

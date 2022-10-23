import IconFontDownloadOffFill0Wght100Grad0Opsz48 from '../components/FontDownloadOffFill0Wght100Grad0Opsz48'
import IconFontDownloadOffFill0Wght200Grad0Opsz48 from '../components/FontDownloadOffFill0Wght200Grad0Opsz48'
import IconFontDownloadOffFill0Wght300Grad0Opsz48 from '../components/FontDownloadOffFill0Wght300Grad0Opsz48'
import IconFontDownloadOffFill0Wght400Grad0Opsz48 from '../components/FontDownloadOffFill0Wght400Grad0Opsz48'
import IconFontDownloadOffFill0Wght500Grad0Opsz48 from '../components/FontDownloadOffFill0Wght500Grad0Opsz48'
import IconFontDownloadOffFill0Wght600Grad0Opsz48 from '../components/FontDownloadOffFill0Wght600Grad0Opsz48'
import IconFontDownloadOffFill0Wght700Grad0Opsz48 from '../components/FontDownloadOffFill0Wght700Grad0Opsz48'
import IconFontDownloadOffFill1Wght100Grad0Opsz48 from '../components/FontDownloadOffFill1Wght100Grad0Opsz48'
import IconFontDownloadOffFill1Wght200Grad0Opsz48 from '../components/FontDownloadOffFill1Wght200Grad0Opsz48'
import IconFontDownloadOffFill1Wght300Grad0Opsz48 from '../components/FontDownloadOffFill1Wght300Grad0Opsz48'
import IconFontDownloadOffFill1Wght400Grad0Opsz48 from '../components/FontDownloadOffFill1Wght400Grad0Opsz48'
import IconFontDownloadOffFill1Wght500Grad0Opsz48 from '../components/FontDownloadOffFill1Wght500Grad0Opsz48'
import IconFontDownloadOffFill1Wght600Grad0Opsz48 from '../components/FontDownloadOffFill1Wght600Grad0Opsz48'
import IconFontDownloadOffFill1Wght700Grad0Opsz48 from '../components/FontDownloadOffFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconFontDownloadOff = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconFontDownloadOffFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconFontDownloadOffFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconFontDownloadOffFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconFontDownloadOffFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconFontDownloadOffFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconFontDownloadOffFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconFontDownloadOffFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconFontDownloadOffFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconFontDownloadOffFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconFontDownloadOffFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconFontDownloadOffFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconFontDownloadOffFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconFontDownloadOffFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconFontDownloadOffFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

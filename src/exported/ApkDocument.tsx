import IconApkDocumentFill0Wght100Grad0Opsz48 from '../components/ApkDocumentFill0Wght100Grad0Opsz48'
import IconApkDocumentFill0Wght200Grad0Opsz48 from '../components/ApkDocumentFill0Wght200Grad0Opsz48'
import IconApkDocumentFill0Wght300Grad0Opsz48 from '../components/ApkDocumentFill0Wght300Grad0Opsz48'
import IconApkDocumentFill0Wght400Grad0Opsz48 from '../components/ApkDocumentFill0Wght400Grad0Opsz48'
import IconApkDocumentFill0Wght500Grad0Opsz48 from '../components/ApkDocumentFill0Wght500Grad0Opsz48'
import IconApkDocumentFill0Wght600Grad0Opsz48 from '../components/ApkDocumentFill0Wght600Grad0Opsz48'
import IconApkDocumentFill0Wght700Grad0Opsz48 from '../components/ApkDocumentFill0Wght700Grad0Opsz48'
import IconApkDocumentFill1Wght100Grad0Opsz48 from '../components/ApkDocumentFill1Wght100Grad0Opsz48'
import IconApkDocumentFill1Wght200Grad0Opsz48 from '../components/ApkDocumentFill1Wght200Grad0Opsz48'
import IconApkDocumentFill1Wght300Grad0Opsz48 from '../components/ApkDocumentFill1Wght300Grad0Opsz48'
import IconApkDocumentFill1Wght400Grad0Opsz48 from '../components/ApkDocumentFill1Wght400Grad0Opsz48'
import IconApkDocumentFill1Wght500Grad0Opsz48 from '../components/ApkDocumentFill1Wght500Grad0Opsz48'
import IconApkDocumentFill1Wght600Grad0Opsz48 from '../components/ApkDocumentFill1Wght600Grad0Opsz48'
import IconApkDocumentFill1Wght700Grad0Opsz48 from '../components/ApkDocumentFill1Wght700Grad0Opsz48'

import { ExportedIconProps } from '../Icon.types'

export const IconApkDocument = ({ fill, size = 48, weight = '400', color }: ExportedIconProps) => {
  switch (true) {
    case fill === '0' && weight === '100':
      return <IconApkDocumentFill0Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '200':
      return <IconApkDocumentFill0Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '300':
      return <IconApkDocumentFill0Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '400':
      return <IconApkDocumentFill0Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '500':
      return <IconApkDocumentFill0Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '600':
      return <IconApkDocumentFill0Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '0' && weight === '700':
      return <IconApkDocumentFill0Wght700Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '100':
      return <IconApkDocumentFill1Wght100Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '200':
      return <IconApkDocumentFill1Wght200Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '300':
      return <IconApkDocumentFill1Wght300Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '400':
      return <IconApkDocumentFill1Wght400Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '500':
      return <IconApkDocumentFill1Wght500Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '600':
      return <IconApkDocumentFill1Wght600Grad0Opsz48 size={size} color={color} />
    case fill === '1' && weight === '700':
      return <IconApkDocumentFill1Wght700Grad0Opsz48 size={size} color={color} />
    default:
      return null
  }
}

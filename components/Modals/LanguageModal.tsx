import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type LanguageModalProps = { 
    showLanguageModal: boolean;
    setShowLanguageModal: (show: boolean) => void;
    onChangeLanguage?: (lng: string) => void;
    languages?: { code: string; name: string; flag: string; direction: 'ltr' | 'rtl' }[];
    language: string;
}
export function LanguageModal({showLanguageModal,languages = [], setShowLanguageModal, onChangeLanguage, language}: LanguageModalProps) {
  const { t } = useTranslation();
  
  return (
    <Modal
      visible={showLanguageModal}
      transparent
      animationType="fade"
      onRequestClose={() => setShowLanguageModal(false)}>
      <Pressable
        style={styles.modalOverlay}
        onPress={() => setShowLanguageModal(false)}>
        <Pressable style={styles.modalContent} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.modalTitle}>{t('common.select_language')}</Text>
          <View style={styles.languageList}>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang.code}
                style={[
                  styles.languageOption,
                  language === lang.code && styles.selectedLanguageOption,
                ]}
                onPress={() => {
                  setShowLanguageModal(false);
                  onChangeLanguage?.(lang.code);
                }}>
                <Text style={styles.languageFlag}>{lang.flag}</Text>
                <Text
                  style={[
                    styles.languageName,
                    language === lang.code && styles.selectedLanguageText,
                    lang.direction === 'rtl' && { textAlign: 'right' },
                  ]}>
                  {lang.name}
                </Text>
                {language === lang.code && (
                  <Ionicons name="checkmark-circle" size={20} color="#007AFF" />
                )}
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setShowLanguageModal(false)}>
            <Text style={styles.modalCloseText}>{t('common.cancel')}</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerLanguageSelector: {
    marginRight: 16,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  headerLanguageText: {
    fontSize: 12,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  languageList: {
    gap: 12,
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    gap: 12,
  },
  selectedLanguageOption: {
    backgroundColor: 'rgba(0,122,255,0.1)',
  },
  languageFlag: {
    fontSize: 24,
  },
  languageName: {
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  selectedLanguageText: {
    fontWeight: '700',
    color: '#007AFF',
  },
  modalCloseButton: {
    marginTop: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalCloseText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});